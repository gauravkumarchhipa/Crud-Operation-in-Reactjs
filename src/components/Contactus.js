import React from 'react'

const Contactus = () => {

    // fetch("https://63e9d66be0ac9368d6451a4c.mockapi.io/users")
    // .then((response)=>{
    //     return response.json();
    // })
    // .then((data)=>{
    //     // console.log(data);
    //     document.write(data);

    // });
    // /////////////////////////////////////////////////////

    // fetch("https://63e9d66be0ac9368d6451a4c.mockapi.io/users")
    // .then((response)=> response.json())
    // .then((data)=> console.log(data))
    // // .catch((error)=> console.log(error));
    // .catch((error)=> document.write("error"));

    //////////////////////////////////////////////////////////////////////////////
  
    // fetch("https://63e9d66be0ac9368d6451a4c.mockapi.io/users")
    // .then((response)=> response.json())
    // .then((data)=>{
    //     for(var x in data){
    //         document.write(`${data[x].name} - ${data[x].email}<br/>`);
    //     }
    // })
    // .catch((error)=> document.write("error"));

    // /////////////////////////////////////////////////////////////////////////////

    // var obj = {
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   };
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify(obj),
        
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));


//////////////////////////////////////////////////////////////////////////////////
  //   let option = {
  //     method : 'POST',
  //     headers : {
  //         'Content-Type' : 'application/json',
  //         'Access=Control-Allow-Origin' : '*'
  //     },
  //     body : JSON.stringify({
  //         name : "Ankit",
  //         email : "ankit@gmail.com"
  //     }),
  // }
  // fetch('https://63e9d66be0ac9368d6451a4c.mockapi.io/users',option)
  //     .then((response) => response.json())
  //     .then((json)=>console.log(json));



  return (
    <div>
        Contactus
    </div>
  )
}

export default Contactus