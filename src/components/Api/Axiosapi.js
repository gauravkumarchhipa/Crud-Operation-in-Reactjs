import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Axiosapi = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditUser, setIsEditUser] = useState(null);


    const emptyalert = () => toast("Please Enter a data");
    const Deletetask = () => toast("data is deleted");
    const edittask = () => toast("Data is Updated");
    const Removeall = () => toast("All Data is Removed");
    const NotFound = () => toast("404 Not Found");
    const onAdd = (event,id)=>{
        event.preventDefault();
        if(!name || !email){
            emptyalert();
        }
        else if(name && email && !toggleSubmit){

            setUser(
                user.map((elem) => {
                    if(elem.id === isEditUser){
                        return{...elem, name : name, email : email}
                            
                    }
                    return elem; 
                }) 
            )

            // const data = Axios.put(`https://63e9d66be0ac9368d6451a4c.mockapi.io/users"/${id}`,
            // {
            //     name , email
            // })
            // .then(response => {
            //     getUsers();
            // })
            // .catch(error =>{
            //     NotFound();
            // });
            // if(data){
            //     getUsers();
            // }

            setToggleSubmit(true);
            setEmail("");
            setName("");
            setIsEditUser(null);
            
        }
        
        else {
            setName('');
            setEmail('');
            Axios.post("https://63e9d66be0ac9368d6451a4c.mockapi.io/users", {name, email})
            .then(response => {
                getUsers();
            })
            .catch(error =>{
                NotFound();
            });
        }
    };

    const deleteData = async(id)=>{
        try{
            await axios.delete(`${"https://63e9d66be0ac9368d6451a4c.mockapi.io/users"}/${id}`)
            Deletetask();
            getUsers();
        } catch(error){
            alert(error)
        }
    }
    // const UpdateData = async(id)=>{
    //     try{
    //         await axios.put(`${"https://63e9d66be0ac9368d6451a4c.mockapi.io/users"}/${id}`,
    //         {
    //             name : "Gaurav",
    //             email : "gaurav@gmail.com"
    //         })
    //         edittask();
    //         getUsers();
    //     }
    //     catch(error){
    //         alert(error)
    //     }  
    // }

    const UpdateData = async(id, name, email)=>{
        try{
            setEmail(email)
            setName(name)
            setToggleSubmit(false);
            setIsEditUser(id);
            const data = await axios.put(`https://63e9d66be0ac9368d6451a4c.mockapi.io/users/${id}`,
            {
                name : name, 
                email : email
            });
            if(data){
                // getUsers();
            }
        }
        catch(error){
            alert(error)
        }    
    }

    const clearAll =()=>{
        setUser([]);
        Removeall();
    }

    const getUsers = async()=>{
        const response = await fetch('https://63e9d66be0ac9368d6451a4c.mockapi.io/users');
        setUser(await response.json());
    } 

    useEffect(()=>{
        getUsers();
       
    },[]);


  return (
    <div>
         <section className="vh-100" style={{backgroundColor : '#fff'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <div className="card rounded-3">
                    <div className="card-body p-4">
                        <h4 className="text-center my-3 pb-3">To Do App Using Api</h4>
                        <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
                        onSubmit={onAdd}>
                            <div className="col-12">
                                <div className="form-outline">  
                                <input type="text" id="form1" className="form-control" 
                                value={name} onChange={(e)=> setName(e.target.value)}/>
                                <label className="form-label" htmlFor="form1">Enter a name here</label>
                                <input type="email" id="form1" className="form-control" 
                                value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                <label className="form-label" htmlFor="form1">Enter a Email here</label>
                                </div>
                            </div>
                            <div className="col-12">
                            { toggleSubmit ?
                                <button type="submit" className="btn btn-primary" >Add</button> : 
                                <button type="submit" className="btn btn-primary" onClick={()=> {edittask(); }}>Update</button>
                            }
                            </div>
                        </form>
                        <table className="table mb-4">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {user.map((ele,num) => {
                            return(
                                <tr key={ele.id}>
                                    <th scope="row">{num+1}</th>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>
                                        <div className='eachItem' >
                                        <button type="button" className="btn btn-danger" onClick={() => deleteData(ele.id)}>Delete</button>&nbsp;&nbsp;
                                        <button type="button" className="btn btn-primary" onClick={() => UpdateData(ele.id, ele.name, ele.email)}>Update</button>
                                        </div>
                                    </td>
                                </tr>
                            )})}                
                        </tbody>
                        </table>
                        <br/>
                        <button type="button" className="btn btn-danger" onClick={clearAll}>remove All</button>  

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <ToastContainer />
    </div>
  )
}

export default Axiosapi