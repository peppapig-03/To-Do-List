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
    return {get size(){return contents.length},append,retrieveContents,remove,name,id,exists}
}
export default project