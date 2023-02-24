import React, { useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState("");
    const [std, setStd] = useState("");
    const [user, setUser] = useState([]);

    const emptyalert = () => toast("Please Enter a data");
   

    const submitform = (e)=>{
        e.preventDefault();
        if(!name || !std){
            emptyalert();   
        }
        else{
        axios.post(`${"https://63e9d66be0ac9368d6451a4c.mockapi.io/students"}`,{name, std})
        .then(response => {
            (getStudent());
        })
        .catch(error =>{
            alert(error);
        });
        const newEntry = {name : name, std : std};
        setUser([...user,newEntry]);
        setName("");
        setStd("");
        }
    }

    const getStudent = async()=>{
        const response = await fetch('https://63e9d66be0ac9368d6451a4c.mockapi.io/students');
        setUser(await response.json());
    }
    useEffect(()=>{
        getStudent();
    },[]);
  return (
    <div>
        <form onSubmit={submitform} id="form1">
        Name
         <input type="text"  className="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
         Standard
         <input type="number" min="1" max="10" className="form-control" value={std} onChange={(e)=> setStd(e.target.value)} /><br/>
         <button type="submit" className="btn btn-primary" >submit</button>
         </form>
        <div>
         <br/>
            <table className="table mb-4"> 
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Standard</th>

                </tr>
            </thead>
            <tbody>   
            {
            user.map((ele,num) =>{
                return(

                    <tr key={num}>
                        <td>{ele.name}</td>
                        <td>{ele.std}</td>
                    </tr> 
                )
            })      
         }
         </tbody>
             </table>
             <br/><br/><br/>

             <table className="table mb-4"> 
            <thead>
                <tr>
                    <th scope="col">Standard</th>
                    <th scope="col">Total strength</th>

                </tr>
            </thead>
            <tbody>   
            {
            user.map((ele,num) =>{
                return(
                    
                    <tr key={num}>
                        <td>{ele.std}</td>
                        
                        <td>{ele.id}</td>
                    </tr> 

                       
                )
            })      
         }

{/* {
            user.map((value => [value, std.filter(str => str === value).length]) =>{
                return(
                    
                    <tr key={num}>
                        <td>{ele.std}</td>
                        <td>{ele.id}</td>
                    </tr> 

                       
                )
            })      
         } */}


         
         </tbody>
        </table>
         </div>  
         <ToastContainer />
    </div>
  )
}
export default Form