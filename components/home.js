import React from "react"
import ReactDOM from "react-dom"

function Home() {
    return (
        <div>
            <h1 className= "main--title">Fun Facts about React</h1>
            <ul className="main--facts">
                <li>Was First released in 2013</li>
                <li>was origionally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>is maintained by facebook</li>
                <li>Powers thousands of enterprice apps, including mobile apps</li>

            </ul>
        </div>
    )
}
export default Home