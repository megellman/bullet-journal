# bullet-journal
## Table of Contents
- [bullet-journal](#bullet-journal)
  - [Table of Contents](#table-of-contents)
    - [PsuedoCode](#psuedocode)
    - [Models](#models)
      - [User](#user)
      - [Journal](#journal)
      - [Entry](#entry)
    - [Associations](#associations)
  - [Routes](#routes)
    - [Home Routes](#home-routes)
    - [API Routes](#api-routes)
  - [Client Side JavaScript](#client-side-javascript)
    - [Event Listeners \& Handlers](#event-listeners--handlers)
  - [Handlebars](#handlebars)


### PsuedoCode

Database: journal_db

### Models
(allowNull: false for everything)

#### User 
* id
* username
* email: validate isemail 
* password: validate len[8]

#### Journal
* id
* title
* date
* topic
* user_id references: {model: user, key: user_id}
* description 

#### Entry
* id
* title
* date
* content
* journal_id references: {model: journal, key: journal_id}

### Associations
* User.hasMany(Journal) - foreign key user_id
* Journal has many Entry - foregien key journal_id
* Journal belongs to User - foregin key 
* Entry belongs to Journal

## Routes

### Home Routes
/ GET - render login page

### API Routes
* /api/journals - POST - create a journal
* /api/entries - POST - create an entry
* /journals/:id - GET - return specifc journal
* /journals/:id/entries - GET - Return all entries where journal id === req.params.journal_id 
* /journals/:id/entries/:entry_id - GET return specific entry
* /api/user/login - POST - loggedIn = true,
* Render dashboard
* /api/user/logout - POST - Session.destroy
* Render login page
* /api/user - POST - loggedIn = true, 
* User.create(username, email, password(bcrypt))
* Render Dashboard

## Client Side JavaScript
### Event Listeners & Handlers 
* Logout (btn)
* Login (form) 
  - username
  - password
* SignUp (form) 
  - username
  - email
  - password
* Journal (form) create/update 
  - title 
  - topic 
  - description 
* Entry (form) create/update
  - title
  - content 
* Delete buttons -- Journal && Entry 

## Handlebars
* Create Journal -- journal form 
* Create Entry -- entry form
* Main -- company title & logo & {{if loggedIn = true}} navbar
* Journal -- entry partial --  (display all entries {{if entryClicked==true}} display entry full content)
* Dashboard -- journal partial 
* Login -- login/signup 
