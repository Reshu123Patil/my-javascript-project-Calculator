var historyList;
function CalculateButtonClick() {
    var textValue = document.getElementById("cal").value;
// 1. Get the current string from the input field
var inputValue = document.getElementById("display");

// 2. The calculator regex (removed the accidental double semicolon)
var calculatorRegex = /^\d+([+\-*\/]\d+)*$/;

var result;

// 3. Validate and evaluate
if (calculatorRegex.test(textValue)) { 
    result = new Function(`return ${textValue}`)();
} else {
    result = "Invalid Input";
}
inputValue.value = result;
     var li = document.createElement("li");
     li.textContent = `${textValue} = ${result}`;
     li.classList.add("border", "border-1", "border-secondary", "list-group-item", "text-center", "m-1","w-75");
     document.getElementById("history-list").appendChild(li);
    document.getElementById("history-list").classList.add("d-none");
 
     document.getElementById("history").addEventListener("click",function(){
   
    document.getElementById("history-list").classList.remove("d-none");
  })

  document.getElementById("clearHistory").addEventListener('click',function(){
         document.getElementById("history-list").remove();
  })
}

 
function deleteClick() {
  var inputField = document.getElementById("cal");
  // Remove the last character from the input field
  inputField.value = inputField.value.slice(0, -1);
}

document.addEventListener
document.addEventListener("DOMContentLoaded", () => {
  // 1. Select all the calculator buttons
  const buttons = document.querySelectorAll(".my-btn");
  // 2. Loop through each button and attach the click event
  if (buttons && buttons.length > 0) {
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        // Access the specific element's value

        const buttonValue = event.target.value;
        const inputField = document.getElementById("cal");
        // inputField.value += buttonValue;
        // inputField.innerText += buttonValue;

        if (buttonValue === "=") {
          CalculateButtonClick();
        } else if (buttonValue === "CE") {
          // --- CLEAR EVERYTHING ---
          inputField.value = "";
          display.value = "";
        } else {
          // --- BUILD THE STRING ---
        
          inputField.value += buttonValue;
          
        }
        
        
      });
    });
  }
});
