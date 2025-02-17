import { useState } from "react"

function Pad(props){

    const [on, setOn] = useState(props.on)

    return(
        <button 

            style={{backgroundColor: props.color}} 
            className={on ? "on":null}
            onClick={props.toggle}
        
        ></button>
    )
    
    
    
}

export default Pad