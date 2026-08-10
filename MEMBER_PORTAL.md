# AOS Member Portal

The member portal is served from `/member-area/`.

## Privacy rule

Do not commit the member directory spreadsheet or generated directory JSON into this repository.
The directory is private member information and must be supplied through Netlify Blobs or, for emergency fallback only, through server-side Netlify environment variables.

## Primary live data store

The live member portal reads from the Netlify Blob store named `aos-member-portal`.

Expected Blob keys:

- `directory.json`
- `access-codes.json`

The Blob store is read only by Netlify Functions. The public website HTML does not include member records or access-code hashes.

## Required Netlify environment variables

- `AOS_MEMBER_SESSION_SECRET`

`AOS_MEMBER_SESSION_SECRET` should be a long random value of at least 24 characters.
Use the individual member-code list in the Blob store when possible. The single access-code variables are retained only as an emergency fallback.

Optional fallback variables:

- `AOS_MEMBER_ACCESS_CODES_JSON_BASE64`, `AOS_MEMBER_ACCESS_CODES_JSON`, `AOS_MEMBER_ACCESS_CODE`, or `AOS_MEMBER_ACCESS_CODE_HASH`
- `AOS_MEMBER_DIRECTORY_JSON` or `AOS_MEMBER_DIRECTORY_JSON_BASE64`

## Individual member access-code JSON shape

Use `AOS_MEMBER_ACCESS_CODES_JSON_BASE64` for the generated private access-code hash list:

```json
{
  "codes": [
    {
      "id": "AOS-0001",
      "name": "Dr Example Member",
      "email": "member@example.invalid",
      "codeHash": "sha256-hash-goes-here",
      "active": true
    }
  ]
}
```

The website verifies only hashes. Do not put plain member access codes into Netlify variables or this repository.

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
