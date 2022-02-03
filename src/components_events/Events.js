import React, {useState} from "react";
import EventsEdit from "./EventsEdit";

function RouterToConnectEditEvents() {
  const [fields, updateFields] = useState({
    title: "",
    description: "",
    date_time: "",
    category: "",
    link: ""
  });

  return (
      <div className="container2">
        <EventsEdit fields={fields} updateFields={updateFields} />
      </div>
  );
}

export default RouterToConnectEditEvents;