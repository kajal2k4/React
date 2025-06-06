// Create react app which contains form with following fields.

// • First Name(Input type text)

// • Lastname(Input type text)

// • Email(Input type email)

// • Password(Input type password)

// • Message (Textarea)

// • Gender(Radio Button)

// • City (Dropdown)

// Display submitted values in alert box. (Using useState Hook)


import React, {useState} from 'react'

export default function Us9(){
     const [data, setData] = useState({});
       function hc(e) {
         const{name,value}=e.target
         setData({...data,[name]:value});
       }
     
       function hs(e){
         e.preventDefault()
         alert(
             `You entered:
             \n ${data.fname}
             \n ${data.lname} 
             \n ${data.city}
             \n ${data.gender}
             `
         )
       }
        
        return(
            <>
                <form onSubmit={hs}>
                    Fname:
                    <input type='text' name='fname' onChange={hc}/>
                    <br></br>
                    Lname:
                    <input type='text' name='lname' onChange={hc}/>
                    <br></br>
                    Message:
                    <textarea name='msg'></textarea>
                    <br></br>
                    City:
                    <select onChange={hc} name='city'>
                        <option value='Ahmedabad'>Ahmedabad</option>
                        <option value='Delhi'>Delhi</option>
                    </select>
                    <br></br>
                    Gender:
                    <input type='radio' name='gender' value='male' onChange={hc}/>Male
                    <input type='radio' name='gender' value='female' onChange={hc}/>Female
                    <br></br>
                    <input type='submit' value='Submit'/>
                </form>
    
            </>
        )
    }