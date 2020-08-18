Base Endpoint : http://ec2-18-139-142-40.ap-southeast-1.compute.amazonaws.com:9000

All endpoints require no Authentication.

List Endpoint :

    Create Notification         : POST  /api/notification/
    Get List of Notification    : GET   /api/notification/
    Get Single Notification     : GET   /api/notification/:notificationID
    Cancel the Scheduled Notification(Works only email) : POST /api/notification/:notificationID/action=:status    

Webhook Endpoint : 
    Purpose : Listening to status update . When webhook shows result , the notification status automatically updated in the database .
    
    Update Status Email : POST api/notification/webhooks
    Update Status SMS   : POST api/notification/sms/webhooks
