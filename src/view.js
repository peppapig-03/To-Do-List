import {deKebab} from "./misc.js"
const render=(function(){
    const cardGroup=document.querySelector(".cardGroup")
    const createProjectCard=function(project){
        const projectCard=document.createElement("div")
        projectCard.textContent=project.name
        projectCard.classList.add("projectCard")
        return projectCard
    }
    const createtodoCard=function(todoitem){
        const todoCard=document.createElement("div")
        todoCard.classList.add("todoCard")
        for (let attribute of Object.entries(todoitem.retrieveItem())){
            const textBox=document.createElement("div")
            if (attribute[0]=="status"){
                if (attribute[1]){
                    textBox.textContent=`${deKebab(attribute[0])}: Completed`
                } else{
                    textBox.textContent=`${deKebab(attribute[0])}: Not Completed`
                }
            }else{
                textBox.textContent=`${deKebab(attribute[0])}: ${attribute[1]}`
            }
            todoCard.appendChild(textBox)
        }
        return todoCard
    }
    const addProjectCard=function(projectCard){
        cardGroup.appendChild(projectCard)
    }
    const addtodoCard=function(projectCard,todoCard){
        projectCard.appendChild(todoCard)
    }
    const clearAll=function(){
        while(cardGroup.firstElementChild){
            cardGroup.removeChild(cardGroup.firstElementChild)
        }
    }
    return {createProjectCard,addProjectCard,clearAll,createtodoCard,addtodoCard}

})()
export default render