const todoitem =function(title,description,dueDate,priority){
    function retrieveItem(){
        return {title,description,dueDate,priority}
    }
    function updateItem(property,newData){
        if (property=="title"){title=newData}
        if (property=="description"){description=newData}
        if(property=="dueDate"){dueDate=newData}
        if(property=="priority"){priority=newData}
    }
    return {retrieveItem,updateItem,title}
}
export default todoitem