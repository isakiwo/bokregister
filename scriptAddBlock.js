let form;

function init(){
    form = document.querySelector("form");

    form.addEventListener("submit", event =>{
        addBook();
        event.preventDefault();
    })
}

window.onload = init;

function addBook(){
    let writer = form.elements.writer.value;
    let titel = form.elements.titel.value;

    json = {
        "writer":writer,
        "titel":titel
    }

    console.log(json);
}