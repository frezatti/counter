// document.getElementById("count").innerText = 5
let countEl=document.getElementById("count");
let count=0;
let previous="Previous entries="
let total=0

function increment(){
    count+=1;
    countEl.textContent=count;
}


function save(){
    total=total+count;
    document.getElementById("total").textContent="Total="+(String)(total);
    
    previous+=(String)(count)+" - "
    saveEl.textContent= previous;

    count=0
    countEl.textContent=count
}