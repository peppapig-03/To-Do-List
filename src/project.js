const project=function(projectName,Id){
    let contents=[]
    const name=projectName
    const id=Id
    const append=function(todoitem){
        contents.push(todoitem)
    }
    const retrieveContents=function(){
        return contents
    }
    const remove=function(todoitem){
        contents.splice(contents.indexOf(todoitem),1)
    }
    const exists=function(todoitem){
        return contents.indexOf(todoitem)
    }
    const replace=function(oldTodoItem,newTodoItem){
        contents[exists(oldTodoItem)]=newTodoItem
    }
    return {get size(){return contents.length},
    append,
    retrieveContents,
    remove,
    name,
    id,
    exists,
    replace
}
}
export default project