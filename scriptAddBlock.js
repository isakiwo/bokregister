let form;

function init(){
    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        addBook();
        event.preventDefault();
    })
}

window.onload = init;

async function addBook(){
    let author = form.elements.author.value;
    let title = form.elements.title.value;

    json = {
        "author":author,
        "title":title
    }

    console.log(json);

    let res = await postBookFetch(json);

    console.log(res);
}

async function postBookFetch(book){
    const path = "https://localhost:7236/Book";

    const response = await fetch (path,{
        method: "POST",
        mode: "cors",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(book)
    });
    return response.status;
}