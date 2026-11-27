<!DOCTYPE html>
<html>
<head>
    <title>Student Information</title>
</head>
<body>

    <h1>University Student Information</h1>

    <!-- This div will be filled by JavaScript -->
    <div id="studentInfo"></div>

    <script>
        // 1 & 2. Declare variables and assign values
        var studentName = "Student Name";
        var rollNumber = "ROLL_NUMBER";
        var department = "software enineering";
        var semester = "1st";

        // 3 & 4. Display using innerHTML, organized with headings and paragraphs
        document.getElementById("studentInfo").innerHTML =
            "<h2>" + studentName + "</h2>" +
            "<p><b>Roll Number:</b> " + rollNumber + "</p>" +
            "<p><b>Department:</b> " + department + "</p>" +
            "<p><b>Semester:</b> " + semester + "</p>";
    </script>

</body>
</html>