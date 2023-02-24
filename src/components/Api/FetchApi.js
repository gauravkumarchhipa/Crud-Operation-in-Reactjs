import React, { useEffect } from 'react'
import { useState } from 'react'
const FetchApi = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState([]);
    
    const onAdd = (event)=>{
        event.preventDefault();
        if(!name || !email){
            
            console.log("enter value");
        }else{
            setUser([...user, name]);
            setName('');
            setEmail('');
            console.log(user);

        }
    }
 
    const getUsers = async()=>{
        const response = await fetch('https://63e9d66be0ac9368d6451a4c.mockapi.io/users');
        setUser(await response.json());
    } 
    useEffect(()=>{
        getUsers();
    },[]);

    const deleteData = ()=>{

    }

    const clearAll =()=>{
        setUser([]);
    }



  //  // Post Api
    // const onAdd = (event)=>{
    //     event.preventDefault();
    //     if(!name || !email){
            
    //         console.log("enter value");
    //     }else{
    //         const url = "https://63e9d66be0ac9368d6451a4c.mockapi.io/users"
    //         fetch(url, {
    //             method : 'POST',
    //             headers : {
    //                 'Content-Type' : 'application/json',
    //                 'Access=Control-Allow-Origin' : '*'
    //             },
    //             body : JSON.stringify(user)
    //         })
    //         .then(response => {
    //             console.log("response", response)
    //             if(response.state === 200){
    //                 alert("success")
    //             }
    //         }).catch(e =>{
    //             console.log("e",e)
    //         })
    //     }
    // }


    
// // get api
//     useEffect(()=>{
//         const url = "https://63e9d66be0ac9368d6451a4c.mockapi.io/users"
//         fetch(url,{
//             header : {
//                 userid : '454565455'
//             },
//         })
//         .then(response => response.json()).then(json => {
//             console.log("json",json)
//             setUser(json)
//         }).catch(e =>{
//             console.log("e",e)
//             })
//     },[])

// post api


    
  return (
    <div>
         <section className="vh-100" style={{backgroundColor : '#fff'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <div className="card rounded-3">
                    <div className="card-body p-4">

                        <h4 className="text-center my-3 pb-3">To Do App Using Api</h4>
                        <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
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
                                <button type="submit" className="btn btn-primary" onClick={onAdd}>Add</button>
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
            
                            {user.map((ele,id) => {
                            return(
                                <tr key={id}>
                                    <th scope="row">{id+1}</th>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>
                                        <div className='eachItem' >
                                        <button type="button" className="btn btn-danger" onClick={deleteData}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )})}
                                        
                        </tbody>
                        </table>
                        <br/>
                        <button type="submit" className="btn btn-danger" onClick={clearAll}>remove All</button>  

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FetchApi