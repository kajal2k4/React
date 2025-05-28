// build basic react app having one h1 element in italic blue color
//  with font sie 20px ,also add list of 5 fruits starts with A,
// current time and data,along with one img
import srcimg from './a.png'
export default function task(){
    let data = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
    return(
    <>
        <h1 style={{color:'blue',fontStyle:'italic', fontSize:'20px'}}>
        TASK</h1>
        <ol type="A">
            <l1>1</l1>
            <l1>2</l1>
            <l1>3</l1>
            <l1>4</l1>
            <l1>5</l1>
        </ol>
        <img src={srcimg}/>{/* in src  */}
        <img src="a.png"/> {/* /in public */}
       
        <p>{data}</p>
        <p>{time}</p>
    </>
    )
   
}
