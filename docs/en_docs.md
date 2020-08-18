Base Endpoint : http://ec2-18-139-142-40.ap-southeast-1.compute.amazonaws.com:9000

All endpoints require no Authentication.

List Endpoint :

 - [Create Notification](https://github.com/Maxxoto/CodeForAsia-NotificationService/blob/master/docs/example/create_notifications.md) &nbsp;&nbsp; : POST  /api/notification/ 
 - [Get List of Notification](https://github.com/Maxxoto/CodeForAsia-NotificationService/blob/master/docs/example/get_list_notifications.md) &nbsp;&nbsp; : GET   /api/notification/ 
 - [Get Single Notification](https://github.com/Maxxoto/CodeForAsia-NotificationService/blob/master/docs/example/get_single_notifications.md) &nbsp;&nbsp; : GET   /api/notification/:notificationID
 - [Cancel the Notification (Works only for email)](https://github.com/Maxxoto/CodeForAsia-NotificationService/blob/master/docs/example/cancel_notifications.md) &nbsp;&nbsp; : POST /api/notification/:notificationID/action=:status    

Webhook Endpoint : 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <p> Purpose : Listening to status update . When webhook shows result , the notification status automatically updated in the database . </p>
    
 - [Update Status Email](#) &nbsp;&nbsp; : POST api/notification/webhooks
 - [Update Status SMS](#) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: POST api/notification/sms/webhooks

There is no need to test webhook endpoint , this endpoint run in server console mode only . And you can track this webhook using docker logs .
