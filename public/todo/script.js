 const inputbox=document.getElementById("input-box");
 const container=document.getElementById("list-container");
function addtask(){
    if (inputbox.value==""){
        alert("YOU MUST ENTER SOMETHING");

    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        container.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputbox.value='';
    savedata();
} 
container.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");}
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }

    
},false)
function savedata()
{
    localStorage.setItem("data",container.innerHTML);
}
function showdata(){
    container.innerHTML=localStorage.getItem("data");

}
showdata();