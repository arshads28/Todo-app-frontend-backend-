
/*
todos= [{ 
title : goto gym,
 description : goto to the gym leg day
}]
 
 */

export function Todos ({todos}){
    return(
      
        <div>
              <h1>hello</h1>
            {   todos.map(function(todo){
                return(
                    <div>
                    <h1> {todo.title}</h1>
                    <h2> {todo.description}</h2>
                    <button>{todo.complete == true ? "complete":"marked as complete"}</button>
                </div>

                ) 
               
            })

            }
            <h1>hello from last</h1>

        </div>
    )
}