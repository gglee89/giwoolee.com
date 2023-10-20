updateCoursesAndRecalculateCost(course: Course, mode: string) {
  switch (mode) {
    case 'create':
      this.courses = this.createCourse(this.courses, course)
      break;
    case 'update':
      this.courses = this.updateCourse(this.courses, course)
      break;
    case 'delete':
      this.courses = this.deleteCourse(this.courses, course);
      break;
    default:
      break;
  }

  this.price = this.widgets.reduce((acc, curr) => acc + curr.price, 0)
}

createCourse(courses, course) {
  return [...courses, Object.assign({}, course, { id: uuidv4() })];
}
updateCourse(courses, course) {
  return courses.map(_course => course.id === _course.id ? Object.assign({}, course) : _course)
}
deleteCourse(courses, course) {
  return courses.filter(_course => course.id !== _course.id)
}