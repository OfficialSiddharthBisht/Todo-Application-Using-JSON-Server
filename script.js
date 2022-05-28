let url = "http://localhost:3000/tasks";
let container = document.querySelector("#container");
function fetchData(){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        displayData(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function displayData(data){
    data.forEach(element => {
        let content = document.createElement("div");
        content.setAttribute("class","content");
        let del = document.createElement("button");
        del.innerText = "DELETE";
        let h3 = document.createElement("h3");
        h3.innerText = element.title;
        content.append(h3,del);
        del.addEventListener("click",(event)=>{
            event.preventDefault();
            deleteElement(element.id);
        })
        container.append(content);
    });
}

async function deleteElement(id){
    let response = await fetch(url + "/" + id,{
        method : "DELETE"
    });
    if(response.status === 200){
        fetchData();
    }
}

async function createNewElement(){
    let title = document.getElementById("title").value;
    let status = document.getElementById("status").value;

    let body = {
        title,
        status
    };

    let response = await fetch(url,{
        method : "POST",
        body : JSON.stringify(body),
        headers :{
            "Content-Type" : "application/json"
        }
    })
}

fetchData();