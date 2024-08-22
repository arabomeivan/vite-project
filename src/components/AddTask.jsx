import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { LuClipboardList } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import Calendar from "./Calendar";

const AddTask = ({
  onAddTask,
  inputValue,
  setInputValue,
  onSaveEdit,
  isEditing,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [view, setView] = useState("notes");

  // When editing, set the input value
  useEffect(() => {
    if (isEditing) {
      setIsVisible(true);
    } else {
      setInputValue("");
      setStartDate(new Date());
      setEndDate(new Date());
      setIsVisible(false);
    }
  }, [isEditing, setInputValue]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSave = () => {
    if (isEditing) {
      onSaveEdit(); // Save the edited task
    } else {
      onAddTask(startDate, endDate); // Add new task
    }
  };

  return (
    <div className="md:max-w-[40%] space-y-3">
      {isVisible && (
        <div className="bg-white p-2 rounded-lg space-y-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Create new task"
            className="w-full bg-gray-100 border-none rounded-lg p-2"
          />
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
              <div
                onClick={() => setView("calendar")}
                className={`p-3 border rounded-lg cursor-pointer ${
                  view === "calendar" ? "bg-black text-white" : "bg-gray-100"
                }`}
              >
                <SlCalender size={18} />
              </div>
              <div
                onClick={() => setView("notes")}
                className={`p-3 border rounded-lg cursor-pointer ${
                  view === "notes" ? "bg-black text-white" : "bg-gray-100"
                }`}
              >
                <LuClipboardList size={18} />
              </div>
            </div>
          </div>
          {view === "notes" ? (
            <textarea
              placeholder="Add notes"
              className="border-none bg-gray-100 w-full h-36 rounded-md p-2"
            />
          ) : (
            <Calendar setStartDate={setStartDate} setEndDate={setEndDate} />
          )}
          <div className="flex flex-row justify-between items-center bg-gray-100 px-3 py-2 rounded-3xl cursor-pointer">
            <div className="flex space-x-2">
              <div>➕</div>
              <div>Add to priority</div>
            </div>
            <div>5</div>
          </div>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-3xl bg-black text-white"
          >
            {isEditing ? "Save Changes" : "Save"}
          </button>
        </div>
      )}
      <div
        onClick={toggleVisibility}
        className="flex flex-row justify-between items-center bg-black text-white px-3 py-2 rounded-3xl cursor-pointer"
      >
        <div className="flex space-x-2">
          <div>➕</div>
          <div>{isEditing ? "Edit Task" : "Create new task"}</div>
        </div>
        <div>N</div>
      </div>
    </div>
  );
};

// Define prop types for AddTask component
AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default AddTask;
