function dataPromise(){ 

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            return response.json()}
        )
        .then ( json => 
            insertdataPromise(json)
        )
        .catch(error => 
            console.log(error)
        )
}

async function dataAsync() {

    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();
    insertdataAsyn(data);

}

function insertdataPromise(data) {

    var text = document.createElement("div")
    text.setAttribute("id" , "text");
    text.innerHTML = 'Data inserted Using promise'
    document.getElementById("api").appendChild(text)
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'UserId: ' + data[i].userId + ' Id: ' + data[i].id + ' Title: ' + data[i].title + ' Completed: ' + data[i].completed;
      document.getElementById("api").appendChild(div);
    }
}

function insertdataAsyn(data) {
    var text = document.createElement("div")
    text.setAttribute("id" , "text");
    text.innerHTML = 'Data inserted Using Async/await'
    document.getElementById("api").appendChild(text)
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'UserId: ' + data[i].userId + ' Id: ' + data[i].id + ' Title: ' + data[i].title + ' Completed: ' + data[i].completed;
      document.getElementById("api").appendChild(div);
    }
}

dataPromise(); // Using Promise
dataAsync(); // Using Sync/Await