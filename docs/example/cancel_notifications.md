# Cancel the Notification (Works only for email) 

Used to cancel single notification by ID .

**URL** : `/api/notification/:notificationID/action=:action `

**Method** : `GET`

**Auth required** : NO

**No Body** 

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "code": "200",
    "message": "Notification will be cancelled !",
    "data": {
        "result": {
            "events": [
                "cancel"
            ],
            "type": [
                "mail",
                "sms"
            ],
            "_id": "5f3a1e3b4d294d51afcf304e",
            "title": "Holla, Im The New Superstar Yayyyyyyyyyyy",
            "subject": "First Email Again Again",
            "body": "If you read this , this is testing email then you can ignore it . Thanks you ",
            "attendances": [
                {
                    "phone": 6280000000,
                    "_id": "5f3a1e3b4d294d1959cf304f",
                    "email": "user1@gmail.com"
                },
                {
                    "phone": 0,
                    "_id": "5f3a1e3b4d294d56fdcf3050",
                    "email": "user2@gmail.com"
                }
            ],
            "batch_id": "YjFhOTkyMjgtZTA0Zi0xMWVhLTgzNDEtN2UzZDlhYmEwMTYyLTEyNThjMGE1Nw",
            "dateSent": "2020-08-17T11:43:10.000Z",
            "dateSentUnix": 1597664590,
            "createdAt": "2020-08-17T06:05:48.733Z",
            "updatedAt": "2020-08-18T16:15:38.272Z",
            "__v": 0
        },
        "resultSendgrid": {
            "batch_id": "YjFhOTkyMjgtZTA0Zi0xMWVhLTgzNDEtN2UzZDlhYmEwMTYyLTEyNThjMGE1Nw",
            "status": "cancel"
        }
    }
}
```
## Headers Parameters 
**notificationID**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <p> The notification model id from the database </p>
**action**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <p> **Only 2 action** provided by sendgrid mail api : **cancel** and **paused** </p>
Please read the [details](https://sendgrid.com/docs/API_Reference/Web_API_v3/cancel_schedule_send.html) to makes you clear .
## Error Response

**Condition** : If you try to cancel SMS , which is mail batch ID still intact in endpoint code

**Code** : `422 UNPROCESSED ENTITY`

**Content** :

```json
{
    "code": "200",
    "message": "Notification will be cancelled !",
    "data": {
        "result": {
            "events": [
                "cancel"
            ],
            "type": [
                "sm"
            ],
            "_id": "5f3bf6397e645170cd9a607d",
            "title": "Iam Title , Nice to meet you ",
            "subject": "Uhm... this is test email ",
            "body": "Hi , this is test message from dani . Please ignore it ",
            "attendances": [
                {
                    "phone": 620000000000,
                    "_id": "5f3bf6397e64512d0d9a607e",
                    "email": "dani@mail.com"
                }
            ],
            "dateSent": "2020-08-17T12:03:10.000Z",
            "dateSentUnix": 1597665790,
            "createdAt": "2020-08-18T15:39:37.484Z",
            "updatedAt": "2020-08-18T16:16:46.421Z",
            "__v": 0
        },
        "resultSendgrid": {
            "errors": [
                {
                    "field": "batch_id",
                    "message": "batch id required"
                }
            ]
        }
    }
}
```
