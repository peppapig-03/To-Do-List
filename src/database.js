import project from "./project.js"
import todoItem from "./todoitem.js"
import memory from "./memory.js"
const database=(function(){
    let nextId=1
    let skippedIds=[]
    const createNewProject=function(projectName){
        let newProject
        if (skippedIds.length==0){
            newProject=project(projectName,nextId)
            nextId+=1
        } else{
            newProject=project(projectName,skippedIds[0])
            skippedIds.splice(0,1)
        }
        return newProject
    }
    const createNewItem=function(title,description,dueDate,priority){
        return todoItem(title,description,dueDate,priority)
    }
    const addItemtoAnyProject=function(item,project){
        project.append(item) 
    }
    const addItemtoNewProject=function(item,projectName){
        const newProject=createNewProject(projectName)
        addItemtoAnyProject(item,newProject)
        memory.post(newProject)
        memory.print()
    }
    const returnProjectId=function(projectName){
        const dictionary=memory.getAllNames()
        if (Object.keys(dictionary).includes(projectName)){
            return dictionary[projectName]
        } else{
            return -1
        }
    }
    const returnItemInProject=function(item,projectName){
        const id=returnProjectId(projectName)
        if (id==-1){
            return -1
        } else{
            let existingProject=memory.get(id)
            if (existingProject.exists(item)==-1){
                return -1
            } else{
                return existingProject
            }
        }
    }
    const addItemtoExistingProject=function(item,projectId){
        let existingProject=memory.get(projectId)
        existingProject.append(item)
        memory.put(projectId,existingProject)
        memory.print()
    }
    const itemProjectMasterFunction=function(item, projectName){
        const id=returnProjectId(projectName)
        if (id==-1){
            addItemtoNewProject(item,projectName)
        } else{
            addItemtoExistingProject(item,id)
        }
    }
    const removeItemfromExistingProject=function(item,projectName){
        const existingProject=returnItemInProject(item,projectName)
        if (existingProject!=-1){
        existingProject.remove(item)
        }
        memory.print()
    }
    const deleteProject=function(projectName){
        const id=returnProjectId(projectName)
        if (id==-1){
            console.log("No such project exists")
            return
        }
        memory.del(id)
        skippedIds.push(id)
        skippedIds.sort()
        memory.print()
    }
    const changeStatus=function(item,projectName){
        const existingProject=removeItemfromExistingProject(item,projectName)
        if (existingProject!=-1){
            item.updateStatus()
        }
    }
    return {createNewItem,itemProjectMasterFunction,removeItemfromExistingProject,deleteProject,changeStatus}
})()
export default database