import React from 'react'
import "./calculator.css"

import { useState } from 'react';
const Calculator = () => {

    const [inputValue, setInputValue] = useState("");
    const [display, setDisplay] = useState([])

    const handleClick = (value) =>{
        setInputValue(value);
        setDisplay([...display, value])
    }

    const handleSubmit = ()=>{
        const result = display
        .join("")
        .split(/(\D)/g)
        .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
        .reduce((ans, value1, index, array) =>{
            
            // console.log(ans);
            // console.log(array);
            // console.log(array[index+1]);
            // console.log(array[index]);
            // console.log(array[index-1]);
            // console.log(value1);

            

            switch (value1){
                case "+" :
                    // return(ans = ans +array[index+1]);
                    return(ans = ans + array[index+1]);

                case "-" : 
                    return(ans = ans - array[index+1]);

                case "*" :
                    return(ans = ans * array[index+1]);

                case "/" : 
                    return(ans = ans / array[index+1]);

                case "**" : 
                    return(ans = ans ** array[index+1]);

                case "%" : 
                return(ans = ans % array[index +1]);
                    
                    

                default : 
                    return ans;

            }
            
        });
        // setDisplay("");
        setInputValue(result);
    }

    const HandleClearAll = ()=>{
        setDisplay("");
        setInputValue("");
    }
    
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
       
          <div className="row header">
            <div className="col-md-2">
              <span className="glyphicon glyphicon glyphicon-menu-hamburger"></span>
            </div>
            <div className="col-md-8">
              <p>Calculator</p>
            </div>
            <div className="col-md-2">
              <span className="glyphicon glyphicon glyphicon-cog"></span>
            </div>
          </div> 
          <div className="row teaxtbox">
          <div className="col-md-12 padding-reset">
              <input type="text" placeholder='0' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} ></input>
            </div>
            <div className="col-md-12 padding-reset">
              <p><b>{display}</b></p>
            </div>
          </div>
          <div className="row commonbutton">
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick("**")}>**</button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick("(")}>(</button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick(")")} >)</button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick("%")}> % </button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick(7)} >7</button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick(8)}>8</button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick(9)}>9</button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={()=> handleClick("/")}>/</button>
            </div>
            <div className="col-md-3">
              <button type="submit"  onClick={() => handleClick(4)}>4</button>
            </div>
            <div className="col-md-3">
              <button type="submit"  onClick={() => handleClick(5)}>5</button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick(6)}>6</button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick("*")}>*</button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick(1)}> 1 </button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick(2)}> 2 </button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick(3)}> 3 </button>
            </div>
            <div className="col-md-3">
              <button type="submit" onClick={() => handleClick("-")}> - </button>
            </div>
          </div>
          <div className="row conflict">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <button type="submit" onClick={() => handleClick(0)}>0</button>
                </div>
                <div className="col-md-4">
                  <button type="submit" id="del" >Del</button>
                </div>
                <div className="col-md-4">
                  <button type="submit" onClick={() => handleClick(".")}>.</button>
                </div>
                <div className="col-md-4">
                  <button type="submit" id="AC" onClick={()=>{HandleClearAll()}}>AC</button>
                </div>
                <div className="col-md-8">
                  <button type="submit" id="equal" onClick={() => handleSubmit()}>=</button>
                </div>
              </div>
            </div> 
            <div className="col-md-3">
                <button type="submit" id="plus" onClick={() => handleClick("+")}>+</button>
            </div>
          </div> 
        </div>
      </div>
    </div>

    </>
  )
}

export default Calculator