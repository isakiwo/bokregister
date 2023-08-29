let books;
let title;


let Books = [];

function init(){
    books = document.getElementById("books");
    getBooks();
}
window.onload = init;

async function getBooks(){
    let Books = await getBooksFetch();

    console.log(Books);

    for (element of Books){
        console.log(element);
        createTableRow(element);
    }
}

async function createTableRow(el){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = el.title;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = el.author;
    tr.appendChild(td);


    books.appendChild(tr);
    console.log(tr);
}

async function getBooksFetch(){
    const path = "https://localhost:7236/Book";

    let response = await fetch(path);
    console.log(response);

    let json = response.json();
    return json;
}