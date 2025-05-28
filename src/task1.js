//create a react app to construct two function named add and sub,use these function as components in 3rd function and print result on browser


function Add(){
    return(
    <>
    <p>ADDITION : {5+3}</p>
    </>
    )
}

function Sub(){
    return(
    <>
    <p>SUB : {5-3}</p>
    </>
    )
   
}

function Task1() {
  return (
    <>
      <Add />
      <Sub />
    </>
  );
}

export default Task1;