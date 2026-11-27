<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Age Calculator</title>
</head>
<body>

    <h1>Age Calculator</h1>
    <button onclick="calculateAge()">Calculate Age</button>
    <p id="result"></p>

    <script>
        function calculateAge() {
            let birthYear = Number(prompt("Enter your birth year:"));
            let currentYear = 2026;
            let age = currentYear - birthYear;
            document.getElementById("result").innerHTML = "Your age is: " + age;
        }
    </script>

</body>
</html>