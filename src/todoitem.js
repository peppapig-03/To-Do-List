const todoitem =function(data){
    let status=false
    let title=data.get("titleInput")
    let description=data.get("descriptionInput")
    let dueDate=data.get("dueDateInput")
    let priority=data.get("priorityInput")
    function retrieveItem(){
        return {title,description,dueDate,priority,status}
    }
    function updateItem(property,newData){
        if (property=="title"){title=newData}
        if (property=="description"){description=newData}
        if(property=="dueDate"){dueDate=newData}
        if(property=="priority"){priority=newData}
    }
    function updateStatus(){
        if(status==false){
            status=true
        } else{
            status=false
        }
    }

    return {retrieveItem,updateItem,title,updateStatus}
}
export default todoitem