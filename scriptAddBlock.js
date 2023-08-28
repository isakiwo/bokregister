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
    let author = form.elements.author.value;
    let title = form.elements.title.value;

    json = {
        "author":author,
        "title":title
    }

    console.log(json);
}