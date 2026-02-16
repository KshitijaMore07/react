import React from "react";

const StudentView = ({ student }) => {

  return (
    <div>
      <h2>Student Information</h2>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Marks: {student.marks}</p>
    </div>
  );

};

export default StudentView;
