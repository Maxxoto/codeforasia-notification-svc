Base Endpoint : http://ec2-18-139-142-40.ap-southeast-1.compute.amazonaws.com:9000

All endpoints require no Authentication.

List Endpoint :

 - [Create Notification](https://github.com/Maxxoto/CodeForAsia-NotificationService/blob/master/docs/example/create_notifications.md) &nbsp;&nbsp; : POST  /api/notification/ 
 - [Get List of Notification]() &nbsp;&nbsp; : GET   /api/notification/ 
 - [Get Single Notification]() &nbsp;&nbsp; : GET   /api/notification/:notificationID
 - [Cancel the Notification (Works only for email)]() &nbsp;&nbsp; : POST /api/notification/:notificationID/action=:status    

Webhook Endpoint : 
    Purpose : Listening to status update . When webhook shows result , the notification status automatically updated in the database .
    
 - [Update Status Email]() &nbsp;&nbsp; : POST api/notification/webhooks
 - [Update Status SMS]() &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: POST api/notification/sms/webhooks
