import todoitem from "./todoitem.js"
const project=function(){
    let contents=[]
    const append=function(todoitem){
        contents.push(todoitem)
    }
    const retrieveContents=function(){
        return contents
    }
    return {append,retrieveContents}
}
export default project