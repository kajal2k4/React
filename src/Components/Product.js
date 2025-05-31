// import ".//index.css";
export default function task4(props){
   
    return(
    <>  
        <div>
        <h3>{props.name}</h3>
        <img src={props.image}/>
        <h3>{props.price}</h3>
        </div>
        

    </>
   
    )
   
}
