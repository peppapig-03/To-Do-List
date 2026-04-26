const todoitem =function(title,description,dueDate,priority){
    let status=false
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