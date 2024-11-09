

// addTodo function

var idcount = 0
var todos = []

function addTodo() {
    
    var todoInput = document.getElementById("todoInput")
    
    if (todoInput.value.length < 2) {
        alert("Enter correct todo value")
        return
    }
    
    todos.push({
        id: idcount,
        title: todoInput.value
    })
    render()
}

function render(){
    var todoParent = document.getElementById("todoParent")
    todoParent.innerHTML = ""
    todoInput.value = ""
    for( var i= 0 ; i < todos.length ; i++ ){
        var div = document.createElement("div")
        var p = document.createElement("p")
        var deleteBtn = document.createElement("button")
        var updateBtn = document.createElement("button")
        
        deleteBtn.textContent = "delete"
        updateBtn.textContent = "update"
        p.textContent = todos[i].title
        
        div.setAttribute("id",todos[i].id)
        deleteBtn.setAttribute("onclick",`deletetodo(${todos[i].id})`)
        updateBtn.setAttribute("onclick", `updateTodo(${todos[i].id})`)
        div.appendChild(p)
        p.appendChild(deleteBtn)
        p.appendChild(updateBtn)
        todoParent.appendChild(div)
    }
    idcount++;
    

}

// =============================================================================================================

// deleteAll function


function deleteAll() {
    var todoParent = document.getElementById("todoParent")
    todos = []
    render()
}

// =============================================================================================================

// delete function

function deletetodo(id) {
for(var i = 0; i < todos.length; i++){
    if(todos[i].id == id){
        todos.splice( i , 1)
        break
    }
}
render()
}   
// ==============================================================================================================

// update function

function updateTodo(id){
    for(var i = 0; i < todos.length; i++){
        if(todos[i].id == id){
            var editvalue = prompt("enter edit value",todos[i].textContent)
            console.log(editvalue)
            todos[i].title = editvalue
            render()
            break
        }
    }
}



