// addEventListener
//Swiss Army Knife!
// 1 method that can attach any type of event listener!


///////////Practice selecting and adding a listener to 1 element.\\\\\\\\\\\\\\\\\\\\\\

// variable of selected element . addEventListener("method", anonymous function(){
// what we want to happen 
// })

const button1 = document.querySelector(".btn1") //<=select our element

button1.addEventListener("click", () => {             //<= addEventListener
  alert("I am a mother lover!")                      //<= add our anonymous function
})

button1.addEventListener("mouseover", () => {         //<= we can add multiple 
  button.innerText="Its about to get hot!"
})

button1.addEventListener('mouseout', () => {           //<= we can add multiple 
  button.innerText = "Click Me"
})

window.addEventListener('scroll', () => {   //<= window was already available so we dont need to select it.
  alert('PLZ STOP SCROLLING!')
})
////////moving button\\\\\\\\\\
const button2 = document.querySelector('.btn2')
///////lets make the button move within are viewing area.
button2.addEventListener('mouseover', () => {
  const height = Math.floor(Math.random() * window.innerHeight)
  const width = Math.floor(Math.random() * window.innerWidth)
  button2.style.left = `${width}px`;
  button2.style.top = `${height}px`;
})
/////if we catch and click the button
button2.addEventListener('click', () => {
  button2.innerText = "You got me!"
  document.body.style.backgroundColor = 'green'
})

///////////Practice selecting and adding a listener to more than 1 element.\\\\\\\\\\\\

