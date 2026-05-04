const renderDialog=(function(){
    const exitButton=function(dialog){
        const exitButton=document.createElement("button")
        exitButton.commandForElement=dialog
        exitButton.command="close"
        exitButton.classList.add("closeButton")
        const svg=document.querySelector(".closeButton >svg").cloneNode(true)
        exitButton.appendChild(svg)
        dialog.appendChild(exitButton)
    }
    const spawnDialog=function(){
        const dialogBox=document.createElement("dialog")
        dialogBox.id="editDialog"
        dialogBox.classList.add("dialogForm")
        exitButton(dialogBox)
        return dialogBox
    }
    return {
        spawnDialog
    }
})()
export default renderDialog