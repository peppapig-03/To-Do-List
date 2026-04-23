import "./styles.css"
import database from "./database.js"
const todo1=database.createNewItem(1,2,3,4)
database.addNewProject("PW1")
database.addItemtoProject(todo1,"PW1")
console.log(Object.keys(todo1))
const li=database.retrieveAllProjects()
console.log(li)
li.forEach((project)=>{
    if(project.name=="PW1"){
    const item1=project.retrieveContents()[0]
    console.log(Object.keys(item1))
    console.log(project.name)
    console.log(item1===todo1)
    console.log(item1.retrieveItem())
    }
})
database.addNewProject("PW2")
database.addItemtoProject(todo1,"PW3")
database.addItemtoProject(todo1,"PW2")
const lis=database.retrieveAllProjects()


