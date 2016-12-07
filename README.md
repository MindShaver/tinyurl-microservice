<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <meta charset="UTF-8">
</head>
<body>
<div class="container-fluid">
    <h1 class="header">API Basejump: URL Shortener Microservice</h1>
    <p>By MindShaver |
        <a href="https://github.com/MindShaver/tinyurl-microservice">Project GitHub</a></p>
        <p> View the live site <a href="https://mindshaver-timestamp-service.herokuapp.com/" target="_blank">HERE</a></p>
    <blockquote>User Stories:
        <ol>
            <li>User Story: I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
            </li>
            <li> If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.</li>
            <li> When I visit that shortened URL, it will redirect me to my original link.</li>
        </ol>
    </blockquote>
    <h2>Example usage:</h2>
    <code>mindshaver-timestamp-service.herokuapp.com/1456790400</code><br/>
    <code>mindshaver-timestamp-service.herokuapp.com/March 1 2016</code>
    <h2>Example output:</h2>
    <code>{<br/>
   "unix": 1456790400,<br/>
   "natural": "Tue Mar 01 2016"<br/>
}</code>
    
</div>
</body>
</html>