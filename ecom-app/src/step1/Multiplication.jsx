
let Multiplication = ({x,y}) =>{
    let multiplication_click = () =>{
        alert("Multiplication ="+ x*y);
    }

    return (
        <div> 
        <button classname="border-1 bg-green-900 hover:bg-blue-900" onClick={()=>multiplication_click()}> Multiplication</button>
        </div>

    )
} 
export default Multiplication;