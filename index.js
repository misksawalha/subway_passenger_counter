let counter  = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let myCount = 0

incrementBtn.onclick=()=>{
        myCount = myCount+1
        counter.innerText = myCount
}

saveBtn.onclick=()=>{
    console.log("misk")
}