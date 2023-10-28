

const inputFieldEl= document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function(){
  let inputAdd = inputFieldEl.value 
  if (inputAdd != ""){
    console.log("Adding: "+ inputFieldEl.value)
  }
  else {
    console.log("Nothing to add")
  }
  

})