import React from "react";

const studentList = [
  {
    id: 1,
    name: "Aung Aung",
    grade: "A",
  },
  {
    id: 2,
    name: "Nandar Aung",
    grade: "A",
  },
  {
    id: 3,
    name: "Thura Aung",
    grade: "C",
  },
  {
    id: 4,
    name: "Aung Kyaw",
    grade: "B",
  },
];
const StudentList = () => {
  return (
    <div>
      <h2>StudentList</h2>
      <div className="students">
        {studentList.map((student) => 
          <div className="student" key={student.id}>
            <h3>Student Name :{student.name} </h3>
            <p>Student Grade :{student.grade}</p>
          </div>
        )}
        {/* <div className="student">
          <h3>Student Name :Aung Aung </h3>
          <p>Student Grade :A</p>
        </div>
        <div className="student">
          <h3>Student Name :Aung Aung </h3>
          <p>Student Grade :A</p>
        </div>
        <div className="student">
          <h3>Student Name :Aung Aung </h3>
          <p>Student Grade :A</p>
        </div> */}
      </div>
    </div>
  );
};

export default StudentList;
