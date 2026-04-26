const memory=(function(){
    let list_of_projects={}
    const post=function(project){
        list_of_projects[project.id]=project
    }
    const print=function(){
        Object.entries(list_of_projects).forEach(([key,value])=>{
            console.log(key,value)
        })
        console.log("Next:")
    }
    const getAllNames=function(){
        let outputDictionary={}
        Object.entries(list_of_projects).forEach(([key,value])=>{
            outputDictionary[value.name]=key
        })
        return outputDictionary
    }
    const get=function(id){
        return list_of_projects[id]
    }
    const put=function(id,updatedProject){
        list_of_projects[id]=updatedProject
    }
    const del=function(id){
        delete list_of_projects[id]
    }
    return {post,print,getAllNames,get,put,del}

})()
export default memory