# Get Single Notification

Used to get single notification by ID .

**URL** : `/api/notification/:notificationID `

**Method** : `GET`

**Auth required** : NO

**No Body** 

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "code": "200",
    "message": "Successfully fetch notification",
    "data": {
        "events": [
            {
                "status": "N/A"
            }
        ],
        "type": [
            "sms",
            "mail"
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
        "updatedAt": "2020-08-18T15:39:37.484Z",
        "__v": 0
    }
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
