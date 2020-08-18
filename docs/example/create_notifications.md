# Create Notification

Used to create scheduled notification .

**URL** : `/api/notification/ `

**Method** : `POST`

**Auth required** : NO

**Request Body Example** :


```json
{
	"send_at":"17 Aug 2020 19:03:10",
	"title" : "Iam Title , Nice to meet you ",
	"subject":"Uhm... this is test email ",
	"body":"Hi , this is test message from dani . Please ignore it ",
	"attendances": [{"email":"dani@mail.com","phone":"+620000000"}],
	"type" : ["sms","mail"]
}
```
## Body Parameters

    - send_at (required) (String) - To schedule the notification 
    - title (required) (String) - The title of the notification
    - subject (required) (String) - The subject of email notification
    - body (required) (String) - The body of SMS or email notification
    - attendances (required) (Array of object) - The list of notification recipients
    - type (required) (Array of string) - Type of notification , whether SMS , Email or both

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "message": "Successfully create a notification !"
}
```

## Error Response

**Condition** : Not Handled Yet

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  
}
```
## Notes
- The notification will be send when the time is matched with **server** local time , which is now is set to Asia/Jakarta timezone . 
- If you send notification earlier than now , there will be **no error response** because not handled yet . 
- If you send **mail** notification earlier than now , the mail notification will be send immediately after you click SEND in postman client . 
- If you send **SMS** notification earlier than now , **the server will not send any SMS .**
- This endpoint still have bugs issue , you can find out in the Github issue page
