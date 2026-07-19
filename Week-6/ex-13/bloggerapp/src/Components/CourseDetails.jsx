import { courses } from "../data";

function CourseDetails() {

  const courseList = (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h1>Course</h1>
      <h1>Details</h1>
      {courseList}
    </div>
  );
}

export default CourseDetails;