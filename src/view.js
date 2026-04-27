const render=(function(){
    const cardGroup=document.querySelector(".cardGroup")
    const createProjectCard=function(project){
        const projectCard=document.createElement("div")
        projectCard.textContent=project.name
        projectCard.classList.add("projectCard")
        return projectCard
    }
    const addProjectCard=function(projectCard){
        cardGroup.appendChild(projectCard)
    }
    const clearAll=function(){
        while(cardGroup.firstElementChild){
            cardGroup.removeChild(cardGroup.firstElementChild)
        }
    }
    return {createProjectCard,addProjectCard,clearAll}

})()
export default render