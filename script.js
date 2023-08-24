//let myJson = '{"titel" : "Jane Eyre", "writer" : "Charlotte Bronte" , "genre" : "roman"}';
//let myObject = JSON.parse(myJson);
let books;
let writer;
let titel;

let Books = {book : [
    {"titel" : "Jane Eyre" , "writer" : "Charlotte Bronte"},
    {"titel" : "Harry Potter" , "writer" : "JK Rowlin"}
]};
    

function init(){
    books = document.getElementById("books"); 
    for(element of Books.book){
        console.log(element);
        createTableRow(element);
        };
        
}
window.onload = init;

function createTableRow(el){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = el.writer;
    tr.appendChild(td);

    
    td = document.createElement("td");
    td.innerHTML = el.writer;
    tr.appendChild(td);

    books.appendChild(tr);
    console.log(tr);
}
