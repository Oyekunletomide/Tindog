import dogs from "./data.js"
import { Dog } from "./Dog.js"


const heartIcon = document.getElementById("heart-icon")
const crossContainer = document.getElementById("cross-icon")
let currentDogIndex = 0
let btnsOn = true
let currentDog = new Dog(dogs[currentDogIndex])



function render() {
    document.getElementById('dog').innerHTML = currentDog.getDogHTML()
}
    render();

function getNewDog() {
    if (currentDogIndex === dogs.length - 1) {
        currentDogIndex = 0
    } else {
        currentDogIndex += 1
    }
    currentDog = new Dog(dogs[currentDogIndex])
    render()
}




heartIcon.addEventListener("click", function(){
    if (btnsOn) {
        currentDog.setMatchStatus(true)
        document.getElementById('like').style.opacity = 1
        btnsOn = false
        setTimeout(function () {
            document.getElementById('like').style.opacity = 0
            btnsOn = true
            getNewDog()
        }, 1000)
    }
})


crossContainer.addEventListener("click", function(){
    if (btnsOn) {
        currentDog.setMatchStatus(false)
        document.getElementById('nope').style.opacity = 1
        btnsOn = false
        setTimeout(function () {
            document.getElementById('nope').style.opacity = 0
            getNewDog()
            btnsOn = true
        }, 1000)
    }
})




