import React from 'react'
import "../App.css"

export default function Iimg() {


    const handleClick = () => {
        window.location = "/";
    }
       
      
    return (
        <div>

        <img className = "erorr444" src = "https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png" alt ="4o4"></img>
        <button  className="Ne" onClick={handleClick} >Go Back Home</button>
            
        </div>
    )
}
