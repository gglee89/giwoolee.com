onCoursesUpdated(course, mode) {
  this.courses = this.updateCourses(this.courses, course, mode);
  this.totalCost = this.updateTotalCost(this.courses);
}

updateCourses(courses: Course[], course: Course, mode: string) {
  switch (mode) {
    case 'create':
      return this.createCourse(this.courses, course)
    case 'update':
      return this.updateCourse(this.courses, course)
    case 'delete':
      return this.deleteCourse(this.courses, course);
    default:
      return courses;
  }  
}

updateTotalCost(courses) { return courses.reduce((acc, curr) => acc + curr.price, 0); }

createCourse(courses, course) {
  return [...courses, Object.assign({}, course, { id: uuidv4() })];
}
updateCourse(courses, course) {
  return courses.map(_course => course.id === _course.id ? Object.assign({}, course) : _course)
}
deleteCourse(courses, course) {
  return courses.filter(_course => course.id !== _course.id)
}