/*Assign variables to constants via html class names*/
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
/*add code for named function(Event handler) defined in HTML when executed*/
function addTask(){
    /*if input is empty display alert with string*/
    /*if input is strictly equal to empty string*/
    if(inputBox.value === ''){
        alert("You must write something");
    }
    
    else{
        /*else assign li to store newly created list item*/
        /*document is a string object, 
        .createElement is a method used to create HTML elements
        li is a variable used to store newly created element*/
        let li = document.createElement("li");
        /*set content of new innerHTML li  to input value */
        /*innerHTML is a property specifically used to get or set the HTML content 
        of an element. It represents the content between the opening 
        and closing tags of an element in the DOM (Document Object Model). It allows you to access or 
        modify the content within an HTML element directly using JavaScript.
        */
        /*Property is a charactersistic of an object*/
        li.innerHTML = inputBox.value;
        /*.appendChild is a method*/
        /*.appendChild is used to add a child node to the end of the list of children 
        of a specified parent node
        */
        /*add newly created list element to the listcontainer*/
        listContainer.appendChild(li);
    }
}
