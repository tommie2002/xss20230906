<script src="/lib/jquery/dist/jquery.js"></script>
<script src="/lib/bootstrap/dist/js/bootstrap.js"></script>

$.ajax({
     headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
                url: 'api/CoursesApi/1045/',
                type: 'PUT',
                dataType: 'json',
                data: JSON.stringify({
    "courseID": 1045,
    "title": "Calculus Changed with XSS",
    "credits": 4,
    "departmentID": 3,
    "department": null,
    "enrollments": null,
    "courseAssignments": null
}),
                success: function (data, textStatus, xhr) {
                    console.log(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Operation');
                }
            });
