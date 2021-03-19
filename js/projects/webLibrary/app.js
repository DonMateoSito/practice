//create objects
class Book {
    constructor(name, author, isbn) {
        this.name = name;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    constructor() { }
    addBook(book) {
        const list = document.getElementById('bookList'),
            row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete"><i class="far fa-times-circle"></i></a></td>
        `;
        
        list.appendChild(row);
    }
    clearBooks() {
        document.getElementById('bookName').value = "";
        document.getElementById('author').value = "";
        document.getElementById('number').value = "";
    }
    removeBook(target) {
        if (target.className ==="delete"){
            target.parentElement.parentElement.remove();
        }
    }
}

function alert(message, clas){
    const div = document.createElement('div'),
        mainDiv = document.querySelector('.list-card'),//parent
        mainRow = document.querySelector('.mainRow'); //form
    
    div.className = `${clas} alert`;
    div.appendChild(document.createTextNode(message));
    mainDiv.insertBefore(div, mainRow);
    setTimeout(function(){
        document.querySelector(".alert").remove();}
        ,1500);
}


document.getElementById('btn').addEventListener('click', function(e){
    const   title = document.getElementById('bookName').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('number').value,
            book = new Book(title,author,isbn),
            ui = new UI();
    if (title === "" || author === "" || isbn === ""){
        alert('Data not inserted, please insert data propely', 'error');
    } else{
        ui.addBook(book);
        ui.clearBooks();
        alert('Book added',"success");
    }
    e.preventDefault();
})
document.getElementById('bookList').addEventListener('click', function(e){
    const ui = new UI();
    alert("Book removed","success")
    ui.removeBook(e.target.parentElement);
    e.preventDefault();
});

