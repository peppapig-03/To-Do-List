import "./styles.css"
import database from "./database.js"
import memory from "./memory.js"
import render from "./view.js"
import {deKebab} from "./misc.js"
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
            const buttonBox=render.todoButtonBox(todoCard)
            const deleteButton=render.deleteItemButton(buttonBox)
            deleteButton.addEventListener("click",(event)=>{
                database.removeItemfromExistingProject(todoitem,project.name)
                renderall()
            })
            const deleteButton2=render.deleteItemButton(buttonBox)
            const deleteButton3=render.deleteItemButton(buttonBox)
        })
    })
}
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const data=new FormData(form)
    form.reset()
    dialog.close()
    const projectName=data.get("projectInput")
    const item=database.createNewItem(data)
    database.itemProjectMasterFunction(item,projectName)
    renderall()
})
