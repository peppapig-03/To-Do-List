import todoitem from "./todoitem.js"
const creator=(()=>{
    const createNewItem=function(title,description,dueDate,priority){
        return todoitem(title,description,dueDate,priority)
    }
    return {createNewItem}
})()
export default creator