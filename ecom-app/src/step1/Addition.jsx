

let Addition = ( ) =>{
    let addtion_click = () =>{
        alert("Addition click");
    }

    return (
        <div> 
        <button classname="border-1 bg-green-900 hover:bg-blue-900" onClick={()=>addition_click()}>This is Addition</button>
        </div>

    )
} 
export default Addition;