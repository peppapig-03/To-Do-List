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
    const addForm=function(dialog){
        const form=document.createElement("form")
        dialog.appendChild(form)
        return form
    }
    const addLabelToQuery=function(queryBox,dataName,labelText){
        const label=document.createElement("label")
        label.setAttribute("for",dataName)
        label.textContent=labelText
        queryBox.appendChild(label)
    }
    const addInputToQuery=function(queryBox,dataName,dataType,Ori){
        const input=document.createElement("input")
        input.value=Ori
        input.id=dataName
        input.name=dataName
        input.type=dataType
        queryBox.appendChild(input)
    }
    const addQueryToForm=function(form,dataName,labelText,dataType,Ori){
        const query=document.createElement("div")
        addLabelToQuery(query,dataName,labelText)
        addInputToQuery(query,dataName,dataType,Ori)
        query.classList.add("queryBox")
        form.appendChild(query)
    }
    const addSubmitButton=function(form){
        const buttonBox=document.createElement("div")
        const button=document.createElement("button")
        buttonBox.classList.add("submitButtonBox")
        button.classList.add("submitButton")
        form.appendChild(buttonBox)
        buttonBox.appendChild(button)
        button.textContent="Submit"
    }
    const spawnDialog=function(titleOri="",descriptionOri="",dueDateOri="",priorityOri=""){
        const dialogBox=document.createElement("dialog")
        dialogBox.id="editDialog"
        dialogBox.classList.add("dialogForm")
        exitButton(dialogBox)
        const form=addForm(dialogBox)
        addQueryToForm(form,"titleInput","Title: ","text",titleOri)
        addQueryToForm(form,"descriptionInput","Description: ","text",descriptionOri)
        addQueryToForm(form,"dueDateInput","Due Date: ","text",dueDateOri)
        addQueryToForm(form,"priorityInput","Priority: ","text",priorityOri)
        addSubmitButton(form)
        return dialogBox
    }
    return {
        spawnDialog
    }
})()
export default renderDialog