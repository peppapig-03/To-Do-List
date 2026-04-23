const project=function(projectName){
    let contents=[]
    const name=projectName
    const append=function(todoitem){
        contents.push(todoitem)
    }
    const retrieveContents=function(){
        return contents
    }
    const remove=function(todoitem){
        contents.splice(contents.indexOf(todoitem),1)
    }
    return {append,retrieveContents,remove,name}
}
export default project