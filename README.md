# Todo-Application-Using-JSON-Server
Todolist Using JSON server
All you need to make today is a todo list application. If incase you don't know what a todolist is; It's basically an application is wherein user keeps track of all the tasks a user gotta do and it's completing status;

You will be using json server for this; ( https://github.com/typicode/json-server )

Some information/doc related to API
get all tasks
method - GET
endpoint /tasks
Sample response

[
  {
    id: 1,
    title: "new",
    status: false
  },
  {
    title: "Buy Bread",
    status: false,
    id: 2
  },
  {
    title: "Buy Milk",
    status: true,
    id: 3
  }
];

get a single task ( by id )
method - GET
endpoint /tasks/:id
sample request /tasks/1
sample response

  {
      "id": 1,
      "title": "new",
      "status": false
  }
create a task
method - POST
endpoint - /tasks
Content Type is application/json;
Request payload

  {
      "title": "Buy Milk",
      "status": true,
  }
Sample Request Response

  {
      "title": "Buy Milk",
      "status": true,
       "id": 3
  }
You can See the following video on postman how to use the API

https://drive.google.com/file/d/1i_FPfg4JQwQlGTToe0pCNKTXsovXW8bk/view?usp=sharing

( Just remember in the above video URL is different and you will be using json server, so the url will be http://localhost:PORT_NUMBERon whichever port you are gonna run )

for example if you are running json-server on port 3000; your url will be

http://localhost:3000/tasks
Problem Statement:
create a web page with a todo list
a user can enter a task through an input tag (title), and a checkbox ( status ) of a task
checkbox documentation - mdn, for checkbox use checked attribute
add an ADD button next to it
when the page loads, get all the tasks available through the GET all tasks endpoint
on ADD, create a new task, send the title, and status as a payload as json
on success make sure you pass the response (check sample response in add task API ) you get from the POST request and append to the list of tasks we already have
or you can also fetch the details again on success and display that
if the status is true, the title as green color, otherwise red
todolist

Bonus ( Yes, there will be extra marks for this ! ):
Add edit functionality :
upon clicking on any of the tasks; ( you can store/save info (task id) related to task in local storage ) you will be moved to edit page; ( create a separate html page called edit.html for this );

once you are in edit.html file; you can retrive the data from local storage; make a network request to get individual task related info ( use get a single task ( by id ) ) endpoint and prefill input box and checkbox with the information from the server response;

So basically there will be input box, checkbox and EDIT button similar to what you see in main page; upon clicking on EDIT button; a PUT/PATCH request will be made to server and the same should be updated in .json file ( mock database ); also user will be moved back to main page once request is successfull wherein user can see updated data;

Add Delete functionality:
Each task created will also have DELETE button with it clicking on which would delete the task from everywhere ( mock database ) and the same should be reflected on webpage wherein deleted task should be removed;
Few more points :

Keep the code clean ; what i mean is having proper variable names and folder/file structure, avoid having commented code, well formatted code
use es-6 syntax ;