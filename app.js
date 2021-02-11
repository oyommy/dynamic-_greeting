const now = new Date();
const hours = now.getHours();
const btn = document.querySelector('button')
const messageDisplay = document.getElementById('message')
const date = now.getTime()
console.log(date);

btn.addEventListener('click', greet)

function greet(){
    switch(hours) {
        case hours > 12:
            messageDisplay.innerHTML = "Good Afternoon, how's your day going?"
            break;
        case hours > 17:
            messageDisplay.innerHTML = "Good Evening, hope your day went well?"
            break;
        default:
            messageDisplay.innerHTML = "Good Morning, have a nice day ahead!"
            break;

    }

}
