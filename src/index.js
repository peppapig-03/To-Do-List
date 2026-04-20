import "./styles.css"
import creator from "./create.js"
import project from "./project.js"
const egs=creator.createNewItem(1,2,3,4)
const lis=project()
lis.append(egs)
console.log(egs.description)
console.log(lis.retrieveContents())