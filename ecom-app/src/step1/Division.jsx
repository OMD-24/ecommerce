

let Division = ( ) =>{
    let division_click = () =>{
        alert("Division click");
    }

    return (
        <div> 
        <button classname="border-1 bg-green-900 hover:bg-blue-900" onClick={()=>division_click()}> Division</button>
        </div>

    )
} 
export default Division;