import "./styles.css"
import database from "./database.js"
import memory from "./memory.js"
import render from "./view.js"
let item=database.createNewItem(1,2,3,4)
database.itemProjectMasterFunction(item,"pw1")
database.itemProjectMasterFunction(item,"pw2")
console.log(memory.get(2).retrieveContents())
database.itemProjectMasterFunction(item,"pw2")
console.log(memory.get(2).retrieveContents())
database.removeItemfromExistingProject(item,"pw2")
console.log(memory.get(1).retrieveContents())
database.deleteProject("pw3")

