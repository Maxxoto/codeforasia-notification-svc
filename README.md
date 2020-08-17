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
    Body (Raw/JSON)    :   <br> {<br>
                    "send_at":"17 Aug 2020 11:43:10",<br>
                    "title" : "Holla",<br>
                    "subject":"first email",<br>
                    "body":"this is body message",<br>
                    "attendances": [{"email":"xxxx@gmail.com","phone":"+6285xxxx"},{"email": "xxxx1@gmail.com"}],<br>
                    "type" : ["mail","sms"],<br>
                } <br>
    
<br><br><br>


Please use postman collection in repository to explore this API . Thanks you
