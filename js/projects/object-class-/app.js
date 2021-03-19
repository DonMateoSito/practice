// selektory
const   data = document.getElementById('h2'),
        btn = document.getElementById('btn'),
        container = document.querySelector('.container');

class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    showData(){
        return `${this.firstName} ${this.lastName}, ${this.age}`;
    }
}
let krzych = new Person('krzych','s',25);
let krzych2 = {
    'firstname':'krzych',
    'lastName': 'sz',
    'age': 32
}
console.log(krzych)
console.log(krzych2)

function addDiv(content){
    const div = document.createElement('div'),
        divParent = document.querySelector('.container');
    div.id = 'h2';
    div.textContent = content;
    divParent.appendChild(div);
}
let object = {};

function addPerson(firstName, lastName, age){
    object = {
        'people':[{
            'firstName': firstName,
            'lastName': lastName,
            'age': age
        }]
    };
    return object;
}

//dodaj element do containera
btn.addEventListener('click',function(){
    addPerson('mat','srat',32);
    addDiv(`${object[0]}`);
    console.log(addPerson('mat','srat',19));
});





