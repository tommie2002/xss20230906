fetch('api/CoursesApi/1045', {
    method: 'PUT',
    body: JSON.stringify({
    courseID: 1045,
    title: 'Calculus Changed with XSS fetch',
    credits: 4,
    departmentID: 3,
    department: null,
    enrollments: null,
    courseAssignments: null
}), // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });
