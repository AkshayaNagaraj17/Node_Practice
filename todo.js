const fs=require("fs")
const {program}=require("commander")

const Todo="todo.json"
//Returning empty array if there is no items
function loads()
{
    if(!fs.existsSync(Todo))
    {
        return[]
    }
    return JSON.parse(fs.readFileSync(Todo,"utf-8"))
}
//saving the new tasks to json
function save(todos)
{
    fs.writeFileSync(Todo,JSON.stringify(todos))
}

//

program.command("add <task>")
.description("Add a task")
.action((task)=>
{
    const todos =loads()
    todos.push({task,done:false})
    save(todos)
    console.log(`Task added:${task}`)
}
)

program.command("list")
.description("List tasks")
.action(()=>{
    const todos=loads()
    if(todos.length === 0)
    {
        console.log("No tasks")
    }
    else 
    {
        todos.forEach((todo,index)=>
        {
            console.log(`${index+1} ${todo.done? "[*]":"[]"} ${todo.task}`)
        })
    }
})
 program.command("done <index>")
 .description("Marking todo as done")
 .action((index)=>{
const todos=loads()
if(todos[index-1])
{
    todos[index-1].done=true;
    save(todos)
    console.log(`Task ${index} is marked done`)
}
else {
    console.log("No tasks")
}
}
)

program.parse(process.argv)
