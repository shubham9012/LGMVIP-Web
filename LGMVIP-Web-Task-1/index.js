let task =document.querySelector("#input-box");
const list =document.getElementById("tasks");
let btn= document.getElementById("btn");




task.addEventListener('keypress',function(e){
    if (e.key === "Enter") {
        e.preventDefault();
        btn.click();
      }
});


function add_item(){
    if (task.value.trim()===''){ 
        alert("please add value");
       
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=task.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="✕";
        li.appendChild(span);
        saveList();          
    }
    task.value ='';
    
}


list.addEventListener("click",(e)=>{
    if(e.target.tagName =='LI'){
        e.target.classList.toggle("check")

    }
    else if(e.target.tagName =='SPAN'){
        e.target.parentElement.remove();

    }
    saveList();
});

function saveList(){
    localStorage.setItem("tasks",list.innerHTML)
}
function showList(){
    list.innerHTML= localStorage.getItem("tasks")
}

showList();




