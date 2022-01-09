import React, {useState} from "react";
import AddCategory from "./AddCategory";


function RouterToConnectAddCategory() {
  const [fields, updateFields] = useState({
    title: "",
    description: "",
  });

  return (
    <div className="container3">
      <AddCategory fields={fields} updateFields={updateFields} />
    </div>
  );
}

export default RouterToConnectAddCategory;