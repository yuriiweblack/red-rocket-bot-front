import React, {useState} from "react";
import EventsEdit from "./EventsEdit";
// import 'bootstrap/dist/css/bootstrap.min.css';

function RouterToConnectEditEvents() {
  const [fields, updateFields] = useState({
    title: "",
    description: "",
    date_time: "",
    category: "",
    link: ""
  });

  return (
    <div className="container">
      <EventsEdit fields={fields} updateFields={updateFields} />
    </div>
  );
}

export default RouterToConnectEditEvents;