let Subtraction = ({x,y}) =>{
    let subtraction_click = () =>{
        alert("Subtraction ="+ x-y);
    }

    return (
        <div> 
        <button classname="border-1 bg-green-900 hover:bg-blue-900" onClick={()=>subtraction_click()}> Subtraction</button>
        </div>

    )
} 
export default Multiplication;