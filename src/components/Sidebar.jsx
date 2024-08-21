const privateList = [
  {
    name: "Home",
    icon: "🏠",
    numberOfItems: 8,
  },
  {
    name: "Completed",
    icon: "⬛️",
    numberOfItems: 16,
  },
  {
    name: "Personal",
    icon: "🟪",
    numberOfItems: 4,
  },
  {
    name: "Work",
    icon: "🟦",
    numberOfItems: 6,
  },
  {
    name: "Diet",
    icon: "💪",
    numberOfItems: 3,
  },
  {
    name: "List of Books",
    icon: "📚",
    numberOfItems: 8,
  },
  {
    name: "Road trip list",
    icon: "🚗",
    numberOfItems: 6,
  },
];

const groupList = [
  {
    name: "Mobile Project",
    noOfPeople: 5,
  },
  {
    name: "Futur Project",
    noOfPeople: 2,
  },
];

const Sidebar = () => {
  return (
    <aside className="bg-white my-2 min-h-[98vh] rounded-md px-2 py-6">
      {/* private */}
      <div>
        <h2 className="font-bold text-xl text-gray-900">Private</h2>
        <div>
          {privateList.map((item, index) => (
            <div
              key={index}
              className="py-2 flex items-center justify-between cursor-pointer hover:bg-gray-100 group rounded-2xl px-3"
            >
              <div className="flex space-x-3">
                <div>{item.icon}</div>
                <p className="text-base">{item.name}</p>
              </div>
              <div className="bg-gray-100 px-2 group-hover:bg-white py-1 rounded-full">
                {item.numberOfItems}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 rounded-full p-1 my-2 flex justify-between items-center cursor-pointer">
          <h1>➕ Create new list</h1>
          <div className="bg-gray-100 px-2 py-1 rounded-full">L</div>
        </div>
      </div>
      {/* group */}
      <div>
        <h2 className="font-bold text-xl text-gray-900">Group</h2>
        <div className="grid grid-cols-2 gap-0 px-3 py-2">
          {groupList.map((item, index) => (
            <div key={index} className="">
              <div className="bg-gray-100 h-36 w-36 rounded-md"></div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.noOfPeople} People</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 rounded-full p-1 my-2 flex justify-between items-center cursor-pointer">
          <h1>➕ Create new list</h1>
          <div className="bg-gray-100 px-2 py-1 rounded-full">G</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
