import "./index.css";
export default function task4(props){
   
    return(
    <>  
        <div style={{margin:"10px", border:"1px solid black", padding:"10px"}}>
        <h3>{props.name}</h3>
        <img src={props.image}/>
        <h3>{props.price}</h3>
        </div>
        

    </>
   
    )
   
}
