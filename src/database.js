import project from "./project.js"
import todoItem from "./todoitem.js"
const database=(function(){
    let projectList=[]
    const addNewProject=function(projectName){
        const newProject=project(projectName)
        projectList.push(newProject)
    }
    addNewProject("")
    const createNewItem=function(title,description,dueDate,priority){
        return todoItem(title,description,dueDate,priority)
    }
    const addItemtoProject=function(item,projectName){
        let success=false
        projectList.forEach((project)=>{
            if (project.name==projectName){
                project.append(item)
                success=true
            }
        })
        if (success==false){
           addItemtoProject(item,"") 
        }

    }
    const retrieveAllProjects=function(){
        return projectList
    }
    return {addNewProject,retrieveAllProjects,createNewItem,addItemtoProject}
})()
export default database