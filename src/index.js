import "./styles.css"
import database from "./database.js"
import render from "./view.js"
let form=document.querySelector("#initForm")
let dialog=document.querySelector(".dialogForm")
const buttonBox=document.querySelector(".buttonBox")
const cardGroup=document.querySelector(".cardGroup")
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
            deleteButton.addEventListener("click",()=>{
                database.removeItemfromExistingProject(todoitem,project.name)
                renderall()
            })
            const updateStatusButton=render.updateStatusButton(buttonBox)
            updateStatusButton.addEventListener("click",()=>{
                todoitem.updateStatus()
                renderall()
            })
            const updateItemButton=render.updateItemButton(buttonBox)
            updateItemButton.addEventListener("click",()=>{
                const editDialog=render.addDialog(todoCard,todoitem.retrieveItem())
                const editForm=editDialog.querySelector("form")
                editForm.addEventListener("submit",(event)=>{
                    event.preventDefault()
                    const editData=new FormData(editForm)
                    editDialog.close()
                    const newTodoItem=database.createNewItem(editData)
                    project.replace(todoitem,newTodoItem)
                    renderall()
                    console.log(editData.get("titleInput"))
                })
            })
        })
    })
}
/*newEntryButton.addEventListener("click",()=>{
    const editDialog=render.addDialog(cardGroup)
    editDialog.textContent="Test234"
})*/
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const data=new FormData(form)
    form.reset()
    buttonBox.appendChild(dialog)
    dialog.close()
    const projectName=data.get("projectInput")
    const item=database.createNewItem(data)
    database.itemProjectMasterFunction(item,projectName)
    renderall()
})
