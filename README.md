<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <meta charset="UTF-8">
</head>
<body>
<div class="container-fluid">
    <h1 class="header">API Basejump: URL Shortener Microservice</h1>
    <p>By MindShaver</p>
        <p> View the live site <a href="https://mindshaver-tinyurl.herokuapp.com/" target="_blank">HERE</a></p>
    <blockquote>User Stories:
        <ol>
            <li>User Story: I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
            </li>
            <li> If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.</li>
            <li> When I visit that shortened URL, it will redirect me to my original link.</li>
        </ol>
    </blockquote>
    <h2>Example usage:</h2>
    <code>mindshaver-tinyurl.herokuapp.com/www.facebook.com</code><br/>
    <code>mindshaver-tinyurl.herokuapp.com/aceb211</code>
    <h2>Example output:</h2>
    <code>{<br/>
   "origin": "www.facebook.com",<br/>
   "tinyUrl": "aceb211"<br/>
}</code>
    
</div>
</body>
</html>