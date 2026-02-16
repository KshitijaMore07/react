import React from "react";
import StudentController from "./controllers/StudentController";
import StudentView from "./views/StudentView";

function App() {

  const controller = new StudentController();
  const studentData = controller.fetchStudent();

  return (
    <div>
      <StudentView student={studentData} />
    </div>
  );
}

export default App;
