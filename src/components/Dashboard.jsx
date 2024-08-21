import { CiClock2 } from "react-icons/ci";
import AddTask from "./AddTask";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";

const Dashboard = () => {
  // Get the current date
  const today = new Date();

  // Options for formatting the date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date
  const formattedDate = today.toLocaleDateString("en-US", options);

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (startDate, endDate) => {
    if (inputValue.trim()) {
      setTasks([
        ...tasks,
        {
          text: inputValue,
          completed: false,
          startDate: startDate.toLocaleDateString(),
          endDate: endDate.toLocaleDateString(),
        },
      ]);
      setInputValue("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
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
                  onClick={() => toggleTaskCompletion(index)}
                  className="border border-gray-300 w-5 h-5 rounded-md"
                ></button>
                <h4>{task.text}</h4>
              </div>
              <div className="flex items-center space-x-1">
                {/* time */}
                <div className="bg-gray-100 p-2 rounded-lg flex items-center space-x-1">
                  <div>
                    {" "}
                    <CiClock2 />
                  </div>
                  <p>
                    {task.startDate} - {task.endDate}
                  </p>
                </div>
                {/* option menu */}
                <div
                  onClick={() => removeTask(index)}
                  className="p-3 bg-gray-100 rounded-lg"
                >
                  <SlOptionsVertical size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-12 right-0">
        {/* Add new task */}
        <AddTask
          onAddTask={addTask}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default Dashboard;
