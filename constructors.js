class Course{
    constructor(name, teachers, courseNumber){
        this.name = name
        this.teachers = teachers
        this.courseNumber = courseNumber
    }
}

class School {
    constructor() {
      this.courses = []
    }
    addCourse(course) {
      this.courses.push(course)
      this.courses.sort(function(a, b) {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      })
      return this
    }
    
    findByName(searchTerm) {
      for (let course of this.courses) {
        if (course.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return course
        }
      }
      return "Did not find a course with that name"
    }
    
    findAllByName(searchTerm) {
      const matches = []
      for (let course of this.courses) {
        if (course.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          matches.push(course)
        }
      }
      return matches
    }
    
    list() {
      return this.courses
    }
  
  }