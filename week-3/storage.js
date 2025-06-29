//browser storage usually for cookies etc limit of 5mbs
//localStorage - stores data until you clean it manually

localStorage.setItem('name', 'John Doe'); // set item
localStorage.getItem('name'); // retrieving the data from the database
localStorage.removeItem('name'); // remove item
localStorage.clear(); // clear all items

let user = {
    name: 'John Doe',
    age: 30
}
localStorage.setItem('user', JSON.stringify(user)); // for sending or saving data
let data = JSON.parse(localStorage.getItem('user')); // retrieve or getting data
data.name; // accessing data

//sessionStorage - stores data for the duration of the page session
sessionStorage.setItem('sessionName', 'John Doe'); //set item
sessionStorage.getItem('sessionName'); // get item
sessionStorage.removeItem('sessionName'); // remove item
sessionStorage.clear(); // clear all items
//cookies
//indexedDatabase

JSON.stringify