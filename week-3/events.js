//everytime an event happens, it triggers js code behind the scenes
//event handling
//event listening-
//element.addEventListener(event type, handlerFunction)
//event is an object
//event handling is a function
//event listening is a method (HTML element)
//element.addEventListener(eventType, handlerFunction)
//eventType(listen for a click, hoover, tap etc)

const button = document.getElementById('submitButton');
//element.addEventListener(eventType, handlerFunction)
function handleSubmit(){
    alert('your chick request has been submitted');
    console.log();
}
button.addEventListener('click', handleSubmit);
button.removeEventListener('click', handleSubmit);
//event objects

document.addEventListener('click', function(event){
    //game development to know where the click happened
    console.log(event.clientX, event.clientY);

})
document.addEventListener('key', function(event){
    //how to detect the key that is pressed on the keyboard
    console.log(event.key);
})