# API Documentation

## Code For Asia Notification Services using Express JS

Base URL Endpoint : ec2-18-139-142-40.ap-southeast-1.compute.amazonaws.com:9000

Core Stack : <br>
    - Email API using Sendgrid :zap: <br>
    - SMS API using Telnyx :cloud:
    
How to use (using postman) : 

**Get a notification :**
    ENDPOINT: /api/notification
    METHOD  : GET
    
**Create a notification :** 
    ENDPOINT: /api/notification
    METHOD  : POST
    BODY    :   {
                    "send_at":"17 Aug 2020 11:43:10",
                    "title" : "Holla",
                    "subject":"first email",
                    "body":"this is body message",
                    "attendances": [{"email":"xxxx@gmail.com","phone":"+6285xxxx"},{"email": "xxxx1@gmail.com"}],
                    "type" : ["mail","sms"],
                } 
    



Please use postman collection in repository to explore this API . Thanks you
