# ZypeSliderAPI : # API ZypeSliderAPI Design Schema (Swagger API Design)

## Watch a live preview Here: https://chanqodev.github.io/zypeSliderAPI/

## RestFul API Create-Read-Update-Delete (CRUD) semantics

## Entetity Definitions

# List Videos : GET

id : uuid
created_at : string,
q : string (title, source id, id)
order : string,
sort : string,
page : integer,
category : string,
friendly_title : string,
mature_content : boolean,
active : string,
on_air : boolean,
source_id : string,
type : string,
vimeo_id : string

# Request schema

host: string
port: int
method : string (POST, GET, PUT, DELETE)
headers: pairlist ('content-type' => 'application JSON') | XML

# Responses Schema

status code: integer (200, 404, 500)
headers : pair-list ("content-length") => 'string'

## Create User : Object

{
'id' : uuid,
'first_name' : string,
'last_name' : string,
'email' : string  
'role' : String
'password' : string
}

### check video Entitlement

### pagination

current : int,
previous : null,
next : int,
per_page : int,
pages: int

#active : bool
#categories : Array(5)
#images : []
#ratings : bool

### Endpoint Definitions
