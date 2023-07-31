import  Quotes  from './Quotes.js'

let btn = document.querySelector('#btn')
let task = document.querySelector('#task')
let container = document.querySelector('.container')
let list = document.querySelector('.list')
let clr = document.querySelector('#clr')
let node;
let check;
let value;
let lab;
let time = document.querySelector('.time')
let input = document.querySelectorAll('input')
let cross;
var checkboxes = document.getElementsByName('todo')
let mobile = document.querySelector('.ri-menu-3-fill')
let body = document.querySelector('body')
let Quote = document.querySelector('.Quotee')
let  Note = document.querySelector('#NOTE')


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let x =  Math.floor( Math.random() * 9) 

Quote.innerText = Quotes[x]

console.log(x)




Note.addEventListener('keyup' , ()=>{

    localStorage.setItem("notes" , Note.value)
})



mobile.addEventListener('click' , ()=>{

    body.classList.toggle('mobile')

})


let count =0;

let date = new Date();
console.log(date.getDate())

const month = [" Jan","Feb","March"," Apr"," May"," Jun"," July"," Aug"," Sept"," Oct"," Nov"," Dec"];

let M = month[date.getMonth()]

console.log(M)

let heading = document.createElement('h2')

let day = document.createTextNode(date.getDate())

let Month = document.createTextNode(M)

heading.appendChild(day)
heading.appendChild(Month)


// let 

time.appendChild(heading)





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('keydown' , (e)=>{

    let KeyButton = e.key;

    // alert(e.key)



    if(task.value ==="" && KeyButton ==="Enter" )

    {
        alert("No task added")

    }


    if( KeyButton ==="Enter" && task.value!=""){


        lab = document.createElement('label')




    
         node = document.createElement('li')
        
         check = document.createElement('input')
         check.type = "checkbox"
         check.name = "todo"
         check.style.marginRight = "5px"

         node.appendChild(check)
        
    
         cross = document.createElement('button')
    
         cross.classList.add("cross")
         cross.innerText = "x"
    

        node.appendChild(cross)
        
        value = document.createTextNode(task.value);

         check.id = task.value
        lab.for = task.value

        node.appendChild(value);

        lab.appendChild(node)
    
        
    
        
        list.appendChild(lab)
    
        node.style.padding = "5px"
        task.value = ""



        
        saveData()
        
        }

    
        

    // console.log(KeyButton)
})


/////////////////////////////////////////////////////////////////////////////// Adding tasks by Add button




btn.addEventListener('click', (event)=>{


if(task.value === ""){
        alert("No task is added")
    }

    else{

lab = document.createElement('label')

    
 node = document.createElement('li')

check = document.createElement('input')
check.type = "checkbox"
check.name = "todo"
node.appendChild(check)
check.style.marginRight = "5px"

node.appendChild(check)


cross = document.createElement('button')
    
cross.classList.add("cross")
cross.innerText = "x"

node.appendChild(cross)



 value = document.createTextNode(task.value);

 check.id = task.value
 lab.for = task.value

 lab.appendChild(node)
        

node.appendChild(value);

list.appendChild(lab)



node.style.padding = "5px"

task.value = ""

saveData()

}


})

//////////////////////////////////////////////////////////////////////////////////////////////////////////// Ckearing tasks button

clr.addEventListener('click' , ()=>{

count =0;



    for(var i =0 ; i < checkboxes.length; i++){

        if(checkboxes[i].checked){
            count++
            saveData()
            
            // console.log(checkboxes[i])
        
    
            
        }
    }

    

    while(list.hasChildNodes()){

        list.removeChild(list.firstChild)

    }


    saveData()

     
    alert("You completed "+count+" tasks")

    



})

//////////////////////////////////////////////////////////////////////////////////////////// list event listener for removing the taks

list.addEventListener('click' , (e)=>{
    
    if(e.target.tagName ==="BUTTON"){
        e.target.parentElement.remove()
        
        saveData()
    }

    if(e.target == check)
    {
        saveData()
    }

    
saveData()






})


/////////////////////////////////////////////////////////////////////////////local storage data saving

function saveData(){

    localStorage.setItem("data" , list.innerHTML)
	
        for(let i = 0; i < checkboxes.length; i++){

        //  marks[i] = "checkbox"

            
          localStorage.setItem("checkbox"+String(i), checkboxes[i].checked);	

        }
      

}

function showTask(){

    list.innerHTML = localStorage.getItem("data")

    Note.value = localStorage.getItem("notes")


// checkboxes[0].checked = localStorage.getItem("checkbox" + String(0))

let i =0 ;

while( i < checkboxes.length){

    checkboxes[i].checked = JSON.parse(localStorage.getItem("checkbox" + String(i)))
    i++

}

    console.log(checkboxes.length)


}

showTask()


////////////////////////////////////////////////////////////////////////////////////


// function display()
// {
//     for(var i =0; i < checkboxes.length ; i++)
//     {
//         console.log(checkboxes[i])
//     }
// }

// display()

// console.log(Note.value)











































