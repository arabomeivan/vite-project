import { CiClock2 } from "react-icons/ci";
import AddTask from "./AddTask";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import {
  addTask,
  toggleTaskCompletion,
  removeTask,
  editTask,
} from "./taskSlice";

const Dashboard = () => {
  const today = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = today.toLocaleDateString("en-US", options);

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = (startDate, endDate) => {
    if (inputValue.trim()) {
      dispatch(
        addTask({
          text: inputValue,
          completed: false,
          startDate: startDate.toLocaleDateString(),
          endDate: endDate.toLocaleDateString(),
        })
      );
      setInputValue("");
    }
  };

  const handleEditTask = (index) => {
    setInputValue(tasks[index].text);
    setEditingIndex(index);
    setIsDropdownOpen(null);
  };

  const handleSaveEdit = () => {
    if (editingIndex !== null) {
      dispatch(
        editTask({
          index: editingIndex,
          updatedTask: { text: inputValue },
        })
      );
      setEditingIndex(null);
      setInputValue("");
    }
  };

  return (
    <div className="w-full h-full p-16 relative">
      <div className="flex flex-row justify-between items-center">
        {/* Welcome User */}
        <div>
          <h1 className="text-xl font-semibold">Good Morning, Sullivan! 👋</h1>
          <p className="text-lg text-gray-600">Today, {formattedDate}</p>
        </div>
        {/* Filter todo */}
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-1 bg-white p-2 min-w-28 rounded-lg">
            <div className="flex items-center">
              <div className="bg-gray-100 p-1 rounded-md">
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>
            <div>Today</div>
          </div>
          <div className="p-2 min-w-10 bg-white text-center rounded-lg">=</div>
        </div>
      </div>
      <div className="py-10">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-md bg-white cursor-pointer ${
              task.completed ? "line-through" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <button
                  onClick={() => dispatch(toggleTaskCompletion(index))}
                  className="border border-gray-300 w-5 h-5 rounded-md"
                ></button>
                <h4>{task.text}</h4>
              </div>
              <div className="flex items-center space-x-1 relative">
                {/* time */}
                <div className="bg-gray-100 p-2 rounded-lg flex items-center space-x-1">
                  <div>
                    <CiClock2 />
                  </div>
                  <p>
                    {task.startDate} - {task.endDate}
                  </p>
                </div>
                {/* option menu */}
                <div
                  onClick={() =>
                    setIsDropdownOpen(isDropdownOpen === index ? null : index)
                  }
                  className="p-3 bg-gray-100 rounded-lg cursor-pointer"
                >
                  <SlOptionsVertical size={14} />
                </div>
                {isDropdownOpen === index && (
                  <div className="absolute right-0 top-8 bg-white shadow-md rounded-md w-32 z-10">
                    <div
                      onClick={() => handleEditTask(index)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Edit
                    </div>
                    <div
                      onClick={() => dispatch(removeTask(index))}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Delete
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-12 right-0">
        {/* Add new task */}
        <AddTask
          onAddTask={handleAddTask}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSaveEdit={handleSaveEdit}
          isEditing={editingIndex !== null}
        />
      </div>
    </div>
  );
};

export default Dashboard;
