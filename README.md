# API Documentation

## Code For Asia Notification Services using Express JS

Base URL Endpoint : ec2-18-139-142-40.ap-southeast-1.compute.amazonaws.com:9000

Core Stack : <br>
    - Email API using Sendgrid :zap: <br>
    - SMS API using Telnyx :cloud:
<br>

Example : <br>

**Get a notification :**
    ENDPOINT: /api/notification
    METHOD  : GET
    
**Create a notification :** <br>
    Endpoint: /api/notification <br>
    Method  : POST <br>
    Body Parameter : <br>
- send_at (string) - ex : "17 Aug 2020 11:43:10"
- title (string)
- subject (string)
- body (string)
- attendance (array of object) ex : [{"email":"user1@gmail.com","phone":"+10123123312"},{"email": "user2@gmail.com"}],
- type (array of strings) switch between SMS or Mail Notification , if use both ex: ["mail","sms"]

**......Documentation in progress**
<br>

Please use postman [collection](https://github.com/Maxxoto/CodeForAsia-NotificationService/blob/master/Code%20For%20Asia%20NS%20Service.postman_collection.json) in repository to explore this API . Thanks you
