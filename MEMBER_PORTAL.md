# AOS Member Portal

The member portal is served from `/member-area/`.

## Privacy rule

Do not commit the member directory spreadsheet or generated directory JSON into this repository.
The directory is private member information and must be supplied through Netlify environment variables.

## Required Netlify environment variables

- `AOS_MEMBER_ACCESS_CODE` or `AOS_MEMBER_ACCESS_CODE_HASH`
- `AOS_MEMBER_SESSION_SECRET`
- `AOS_MEMBER_DIRECTORY_JSON` or `AOS_MEMBER_DIRECTORY_JSON_BASE64`

`AOS_MEMBER_SESSION_SECRET` should be a long random value of at least 24 characters.
Use the hash variant for the access code when possible.

## Directory JSON shape

The function accepts either a JSON array of member rows or an object with a `members` array:

```json
{
  "updatedAt": "2026-07-14",
  "members": [
    {
      "Full Name as it should appear in AOS Directory": "Dr Example Member",
      "Place of Practice / City": "Agra",
      "Mobile Number": "0000000000",
      "Email ID": "member@example.invalid",
      "Highest Orthopaedic Qualification": "MS Orthopaedics",
      "Hospital / Clinic Name": "Example Hospital",
      "Present Appointment / Designation": "Consultant Orthopaedic Surgeon",
      "Which details may be included in the AOS Digital Directory circulated among AOS members?": "Name, professional details, mobile number, email ID and photograph"
    }
  ]
}
```

The live page does not include member records in its HTML. It requests the directory through `/.netlify/functions/member-directory` only after member login.
