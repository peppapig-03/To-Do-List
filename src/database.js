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
        return newProject
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
        return existingProject
    }
    const itemProjectMasterFunction=function(item, projectName){
        const id=returnProjectId(projectName)
        if (id==-1){
            return addItemtoNewProject(item,projectName)
        } else{
            return addItemtoExistingProject(item,id)
        }
    }
    const removeItemfromExistingProject=function(item,projectName){
        const existingProject=returnItemInProject(item,projectName)
        if (existingProject!=-1){
        existingProject.remove(item)
        }
        const project=memory.get(returnProjectId(projectName))
        if (project.size==0){
            deleteProject(projectName)
        }
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
    }
    const changeStatus=function(item,projectName){
        const existingProject=removeItemfromExistingProject(item,projectName)
        if (existingProject!=-1){
            item.updateStatus()
        }
    }
    const retrieveAllProjects=function(){
        const allProjects=memory.getAllProjects()
        let intermediaryList=Object.entries(allProjects)
        intermediaryList.sort((a,b)=>{a[0]-b[0]})
        let finalList=intermediaryList.map((x)=>{return x[1]})
        return finalList
    }
    return {createNewItem,
        itemProjectMasterFunction,
        removeItemfromExistingProject,
        deleteProject,
        changeStatus,
        retrieveAllProjects}
})()
export default database