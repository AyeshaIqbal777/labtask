<!DOCTYPE html>
<html>
<head>
    <title>Air University</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>

    <h1>Air University</h1>

    <p id="message">Welcome to Air University!</p>

    <button id="goodbyeBtn">Say Goodbye</button>

    <script>
        $(document).ready(function () {
            $("#goodbyeBtn").click(function () {
                $("#message").text("Goodbye! Best wishes for your future.");
            });
        });
    </script>

</body>
</html>