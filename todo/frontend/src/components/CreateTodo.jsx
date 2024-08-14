import { useState } from "react";

export function CreateTodo(){
    //react query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
        return (
            <div>
            <br /> 
            <input type="text" placeholder="Title"  onChange={function(e){
                const value = e.target.value
                setTitle(e.target.value)

            }} />


            <br />
            <br />

            <input type="text" placeholder=" Description"    onChange={function(e){
                const value = e.target.value
                setDescription(e.target.value)
             }} />

            <br />
            <br />
            <button  onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method: "POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers:{
                        "contentType":"application/json"
                    }
                })
                .then(async function(res){
                    const json = await res.json();
                    alert("todo is added")
                })
            }}  >Add a todo </button>
        </div>
        )
       
}