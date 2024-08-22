import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// eslint-disable-next-line react/prop-types
const Calendar = ({ setStartDate, setEndDate }) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setStartDate(startDate);
    setEndDate(endDate);
    setSelectionRange(ranges.selection);
  };

  return (
    <DateRange
      className="w-full"
      ranges={[selectionRange]}
      onChange={handleSelect}
      rangeColors={["#1D24CA"]}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
    />
  );
};

export default Calendar;
