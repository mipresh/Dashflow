import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function TaskManager() {
  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem("taskColumns");
    return saved
      ? JSON.parse(saved)
      : {
          todo: {
            name: "To Do",
            items: [
              { id: "1", content: "Bookmark List" },
              { id: "2", content: "Organize" },
            ],
          },
          inprogress: {
            name: "In Progress",
            items: [{ id: "3", content: "Check Account List" }],
          },
          done: {
            name: "Done",
            items: [{ id: "4", content: "Sort Orders" }],
          },
        };
  });

  const [newTask, setNewTask] = useState({});
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    localStorage.setItem("taskColumns", JSON.stringify(columns));
  }, [columns]);

  // Slack notification function
  const sendSlackMessage = (text) => {
    const webhookUrl = import.meta.env.VITE_SLACK_WEBHOOK; // store your webhook in .env
    if (!webhookUrl) return;

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    }).catch((err) => console.error("Slack message failed:", err));
  };


  // DRAG FUNCTION
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: { ...column, items: copiedItems },
      });
    } else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
        [destination.droppableId]: { ...destColumn, items: destItems },
      });
    }
  };

  // ADD TASK
const addTask = (columnId) => {
  const task = newTask[columnId];
  if (!task?.text) return;

  const newItem = {
    id: Date.now().toString(),
    content: task.text,
    priority: task.priority || "low",
    dueDate: task.dueDate || "",
  };

  setColumns({
    ...columns,
    [columnId]: {
      ...columns[columnId],
      items: [...columns[columnId].items, newItem],
    },
  });

  // ✅ Show notification
  setNotification("Task added successfully ✅");
  setTimeout(() => setNotification(""), 2000);

  // ✅ Send to Slack
  sendSlackMessage(`📌 New Task Added: ${task.text}`);

  setNewTask({ ...newTask, [columnId]: {} });
};


  // DELETE TASK
  const deleteTask = (columnId, taskId) => {
    const filtered = columns[columnId].items.filter((item) => item.id !== taskId);

    setColumns({
      ...columns,
      [columnId]: {
        ...columns[columnId],
        items: filtered,
      },
    });
  };

  // SAVE EDIT
  const saveEdit = (columnId, taskId) => {
    const updated = columns[columnId].items.map((item) =>
      item.id === taskId ? { ...item, content: editingText } : item
    );

    setColumns({
      ...columns,
      [columnId]: {
        ...columns[columnId],
        items: updated,
      },
    });

    setEditingTaskId(null);
    setEditingText("");
  };

  /*prority status check*/
   const getDateStatus = (dueDate) => {
  if (!dueDate) return "none";

  const today = new Date().toISOString().split("T")[0];

  if (dueDate < today) return "overdue";
  if (dueDate === today) return "today";
  return "upcoming";
};  


return (

    <DragDropContext onDragEnd={onDragEnd}>
     <div className="flex flex-col md:flex-row gap-4">
        {Object.entries(columns).map(([columnId, column]) => (
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-full md:w-1/3">
            <h2 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
              {column.name}
            </h2>

            
    {notification && (
      <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow z-50">
        {notification}
      </div>
    )}

            {/* ADD TASK INPUT */}
            <div className="flex flex-col gap-2 mb-3">
  <input
    value={newTask[columnId]?.text || ""}
    onChange={(e) =>
      setNewTask({
        ...newTask,
        [columnId]: { ...newTask[columnId], text: e.target.value },
      })
    }
    placeholder="Task..."
    className="px-2 py-1 rounded border text-sm"
  />

  <div className="flex gap-2">
    <select
      value={newTask[columnId]?.priority || "low"}
      onChange={(e) =>
        setNewTask({
          ...newTask,
          [columnId]: {
            ...newTask[columnId],
            priority: e.target.value,
          },
        })
      }
      className="text-sm border rounded px-2"
    >
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <input
      type="date"
      value={newTask[columnId]?.dueDate || ""}
      onChange={(e) =>
        setNewTask({
          ...newTask,
          [columnId]: {
            ...newTask[columnId],
            dueDate: e.target.value,
          },
        })
      }
      className="text-sm border rounded px-2"
    />

 <button
  onClick={() => addTask(columnId)}
  className="bg-blue-500 text-white px-3 py-1 rounded flex items-center justify-center"
>
  +
</button>
  </div>
</div>

            <Droppable droppableId={columnId}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`flex flex-col gap-2 min-h-[100px] p-2 rounded ${
                    snapshot.isDraggingOver ? "bg-blue-100 dark:bg-blue-900" : ""
                  }`}
                >
                  {column.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`p-3 rounded shadow ${
                            snapshot.isDragging
                              ? "bg-blue-300 dark:bg-blue-700"
                              : "bg-white dark:bg-gray-900"
                          }`}
                        >
                          {/* EDIT MODE */}
                          {editingTaskId === item.id ? (
                            <div className="flex gap-2">
                              <input
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                                className="flex-1 px-2 py-1 border rounded"
                              />
                              <button
                                onClick={() => saveEdit(columnId, item.id)}
                                className="text-green-500"
                              >
                                ✔
                              </button>
                            </div>
                          ) : (
                            <div className="flex justify-between items-center">
                              <div className="flex flex-col">
  <span className="font-medium">{item.content}</span>

  <div className="flex items-center gap-2 mt-1">
    {/* PRIORITY */}
    <span
      className={`text-xs px-2 py-1 rounded ${
        item.priority === "high"
          ? "bg-red-200 text-red-700"
          : item.priority === "medium"
          ? "bg-yellow-200 text-yellow-700"
          : "bg-green-100 text-green-300"
      }`}
    >
      {item.priority}
    </span>

                 {/* DUE DATE */}
             {item.dueDate && (
  <span
    className={`text-xs ${
      getDateStatus(item.dueDate) === "overdue"
        ? "text-red-600 font-semibold"
        : getDateStatus(item.dueDate) === "today"
        ? "text-yellow-600 font-semibold"
        : "text-gray-500"
    }`}
  >
    📅 {item.dueDate}
  </span>
)}
           </div>
               </div>
            <div className="flex gap-2">
            <button
  onClick={() => {
    setEditingTaskId(item.id);
    setEditingText(item.content);
  }}
  className="text-blue-500 hover:text-blue-700"
>
  <FiEdit size={16} />
</button>
                              <button
  onClick={() => deleteTask(columnId, item.id)}
  className="text-red-500 hover:text-red-700"
>
  <FiTrash2 size={16} />
</button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}