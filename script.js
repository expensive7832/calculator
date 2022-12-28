const buttons = document.querySelectorAll("button")
const screen = document.querySelector(".screen")

let data = []
let acc;

const addToBuffer = (button) =>{
    value = button.textContent

   if(value === "clear"){
        data = []
        screen.textContent = "."
   }else if(value === "="){
        const res = eval(acc);
        screen.textContent = res;
        data= []
        data?.push(res)
   }else{
    data?.push(value)
    acc = data?.join('')
    screen.textContent = acc
   }
}

buttons.forEach((button) => button.onclick = () => addToBuffer(button))