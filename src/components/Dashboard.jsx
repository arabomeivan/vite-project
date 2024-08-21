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
  return (
    <div className="w-full h-full p-16">
      <div className="flex flex-row justify-between items-center">
        {/* Welcome User */}
        <div>
          <h1 className="text-xl font-semibold">Good Morning, Sullivan! 👋</h1>
          <p className="text-lg text-gray-600">Today, {formattedDate}</p>
        </div>
        {/* Filter todo */}
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-1 bg-white p-2 min-w-28 rounded-lg">
            <div>l</div>
            <div>Today</div>
          </div>
          <div className="p-2 min-w-10 bg-white text-center rounded-lg">=</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
