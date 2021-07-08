// addEventListener
//Swiss Army Knife!
// 1 method that can attach any type of event listener!

///////////Practice selecting and adding a listener to 1 element.\\\\\\\\\\\\\\\\\\\\\\

// variable of selected element . addEventListener("method", anonymous function(){
// what we want to happen
// })

const button1 = document.querySelector(".btn1") //<=select our element

button1.addEventListener("click", () => {
  //<= addEventListener
  alert("I am a mother lover!") //<= add our anonymous function
})

button1.addEventListener("mouseover", () => {
  //<= we can add multiple
  button.innerText = "Its about to get hot!"
})

button1.addEventListener("mouseout", () => {
  //<= we can add multiple
  button.innerText = "Click Me"
})
//turning this off for now, its annoying af.
// window.addEventListener('scroll', () => {   //<= window was already available so we dont need to select it.
//   alert('PLZ STOP SCROLLING!')
// })
////////moving button\\\\\\\\\\
const button2 = document.querySelector(".btn2")
///////lets make the button move within are viewing area.
button2.addEventListener("mouseover", () => {
  const height = Math.floor(Math.random() * window.innerHeight)
  const width = Math.floor(Math.random() * window.innerWidth)
  button2.style.left = `${width}px`
  button2.style.top = `${height}px`
})
/////if we catch and click the button
button2.addEventListener("click", () => {
  button2.innerText = "You got me!"
  document.body.style.backgroundColor = "green"
})

///////////Practice - Events on Multiple Elements.\\\\\\\\\\\\

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
]
/////////////////1st way\\\\\\\\vanilla\\\\\\\\\\\\
// const container = document.querySelector("#boxes")
// for (let color of colors) {
//   const box = document.createElement("div")
//   box.style.backgroundColor = color
//   box.classList.add("box")
//   container.appendChild(box)

//   box.addEventListener("click", () => {
//     alert(box.style.backgroundColor)
//   })
// }
///////////////2nd way\\\\\\\callback func\\\\\\\\\\\\\
// const printColor = function (box) {
//   alert(box.style.backgroundColor)
// }

// const container = document.querySelector("#boxes")
// for (let color of colors) {
//   const box = document.createElement("div")
//   box.style.backgroundColor = color
//   box.classList.add("box")
//   container.appendChild(box)

//   box.addEventListener("click", () => {
//     printColor(box)
//   })
// }

/////////////////////3rd\\\using this (box)\\\\\\\\\\\\\\\\\\
// //our event handler
// const printColor = function (box) {
//   alert(this.style.backgroundColor)
// }

// const container = document.querySelector("#boxes")

// for (let color of colors) {
//   const box = document.createElement("div")
//   box.style.backgroundColor = color
//   box.classList.add("box")
//   container.appendChild(box)

//   box.addEventListener("click", printColor)
// }

/////////////3rd\\\using this (box)\\\change font color\\\\\\\\\\\\\\\
// const changeColor = function (box) {
//   const pac = document.querySelector(".pac")
//   pac.style.color = this.style.backgroundColor
// }

// const container = document.querySelector("#boxes")

// for (let color of colors) {
//   const box = document.createElement("div")
//   box.style.backgroundColor = color
//   box.classList.add("box")
//   container.appendChild(box)
//   box.addEventListener("click", changeColor)
// }

//////////The Event Object\\\\\\\\\\\\\\
//we have access to the objects of event listeners
//inside the keypress event we have access to the key pressed
// document.body.addEventListener("keypress", (event) => {
//   alert(event.key)
// })

///////////Events - keys\\\\\\\\\\\\\\\\\\\

// const input = document.querySelector("#username")

// input.addEventListener("keydown", (event) => {
//   console.log('KEY DOWN!')
//   })

// input.addEventListener("keyup", (event) => {
//   console.log('KEY UP!')
// })

// input.addEventListener("keypress", (event) => {
//   console.log("KEY WAS PRESSED!")
// })

/////////////////////////////////////////////////////////////////////
//////// HTML items with id's we made 
// <input type="text" id="addItem" placeholder="food">  INPUT
// <ul id="items"></ul>                                 UL

//////// Select the HTML items by id
// const addItemInput = document.querySelector("#addItem")
// const itemsUL = document.querySelector("#items")

// // add event listener
// addItemInput.addEventListener("keypress", function(e){   // <=cannot use arrow functions with this
//   if (e.key === 'Enter') {                               // when we hit the enter key
//     const newItemText = this.value                       // capture txt in input
//     const newItem = document.createElement('LI')         // create new li for appending to ul
//     newItem.innerText = newItemText                      // change li txt to captured value
//     itemsUL.appendChild(newItem)                         // append the li to ul
//     this.value = ''                                      // clears input after we hit enter
// }
// })


const newInput = document.querySelector('#addItem')
const newLI = document.querySelector('#items')

newInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const newItemText = this.value
    const newItem = document.createElement('li')
    newItem.innerText = newItemText
    newLI.appendChild(newItem)
    this.value = ''
  }
})

/*
1.) const variable = document.querySelector('')
2.) variable.addEventListener(''){ }
3.) newElement = document.createElement('')
4.) newElement.appendChild
*/
