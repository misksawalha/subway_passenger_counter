let counter  = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let previousEntries = document.getElementById("previous-entries")
let myCount = 0

incrementBtn.onclick=()=>{
        myCount = myCount+1
        counter.textContent = myCount
}

saveBtn.onclick=()=>{
    previousEntries.textContent+=myCount+" - "
    myCount = 0
    counter.textContent = myCount
}