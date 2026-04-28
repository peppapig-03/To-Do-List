import "./styles.css"
import database from "./database.js"
import memory from "./memory.js"
import render from "./view.js"
import {deKebab} from "./misc.js"
/*let item=database.createNewItem(1,2,3,4)
database.itemProjectMasterFunction(item,"pw1")
database.itemProjectMasterFunction(item,"pw2")
console.log(memory.get(2).retrieveContents())
database.itemProjectMasterFunction(item,"pw2")
console.log(memory.get(2).retrieveContents())
database.removeItemfromExistingProject(item,"pw2")
console.log(memory.get(1).retrieveContents())
database.deleteProject("pw3")*/
let form=document.querySelector("form")
let dialog=document.querySelector("dialog")
const renderall=function(){
    render.clearAll()
    const allProjectList=database.retrieveAllProjects()
    allProjectList.forEach((project)=>{
        const projectCard=render.createProjectCard(project)
        render.addProjectCard(projectCard)
        project.retrieveContents().forEach((todoitem)=>{
            const todoCard=render.createtodoCard(todoitem)
            render.addtodoCard(projectCard,todoCard)
        })
    })
}
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const data=new FormData(form)
    form.reset()
    dialog.close()
    const title=data.get("titleInput")
    const description=data.get("descriptionInput")
    const dueDate=data.get("dueDateInput")
    const priority=data.get("priorityInput")
    const projectName=data.get("projectInput")
    const item=database.createNewItem(title,description,dueDate,priority)
    database.itemProjectMasterFunction(item,projectName)
    renderall()
})
