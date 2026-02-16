import StudentModel from "../models/StudentModel";

class StudentController {

  constructor() {
    this.model = new StudentModel();
  }

  fetchStudent() {
    return this.model.getStudent();
  }

}

export default StudentController;
