import { useState } from "react";
import { LuClipboardList } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

const AddTask = ({ onAddTask, inputValue, setInputValue }) => {
  // State to toggle visibility of the task input section
  const [isVisible, setIsVisible] = useState(false);

  // Toggle function to show/hide the task input section
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="md:max-w-[40%] space-y-3">
      {/* Conditionally render the task input section */}
      {isVisible && (
        <div className="bg-white p-2 rounded-lg space-y-3">
          {/* Input Field */}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Create new task"
            className="w-full bg-gray-100 border-none rounded-lg p-2"
          />

          {/* Dropdown and Icons */}
          <div className="flex items-center justify-between space-x-2">
            <select
              id="categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              <option>No List</option>
              <option>Personal</option>
              <option>Work</option>
              <option>Diet</option>
            </select>
            <div className="flex space-x-1">
              <div className="p-3 border rounded-lg">
                <SlCalender size={18} />
              </div>
              <div className="bg-black p-3 rounded-lg">
                <LuClipboardList color="white" size={18} />
              </div>
            </div>
          </div>

          {/* Notes */}
          <textarea
            placeholder="Add notes"
            className="border-none bg-gray-100 w-full h-36 rounded-md p-2"
          />

          {/* Priority Section with onAddTask */}
          <div
            onClick={onAddTask}
            className="flex flex-row justify-between items-center bg-gray-100 px-3 py-2 rounded-3xl cursor-pointer"
          >
            <div className="flex space-x-2">
              <div>➕</div>
              <div>Add to priority</div>
            </div>
            <div>5</div>
          </div>
        </div>
      )}
      {/* Toggle visibility of the task input section */}
      <div
        onClick={toggleVisibility}
        className="flex flex-row justify-between items-center bg-black text-white px-3 py-2 rounded-3xl cursor-pointer"
      >
        <div className="flex space-x-2">
          <div>➕</div>
          <div>Create new task</div>
        </div>
        <div>N</div>
      </div>
    </div>
  );
};

export default AddTask;
