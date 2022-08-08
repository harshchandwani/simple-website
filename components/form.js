import React from "react"


export default function Form(){
    return (
        <form>
            <label>Your Name Please</label>
            <input 
                type="text"
                value={name}>

            </input>
        </form>
    )
}