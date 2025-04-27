import React, { useState } from "react";

const App =()=>{

    const sciname =["sin","cos","In","log","tan","e","^","!","√"]


    const basickey=["7","8","9","*","/","4","5",
      "6","-","(","1","2","3","+",")",".","0","DEL","AC","="]
      
   const [expression ,setexpression] = useState("");
   const [result ,setresult] = useState("0");
   const [disexp ,setdisexp] = useState("");
      
   const scical ={
    sin:"math.sin",
    cos:"math.cos",
    tan:"math.tan",
    In :"math.log",
    log:"math.log10",
    e:"math.E",
    
    "^":"**",
    "√":"math.sqrt"

   }


   function calcResult() {
    if(expression.length !==0){
      try{
        let cal= eval(expression);
        setresult(cal);
      }
      catch(error){
            setresult("ERROR")
      }
      
    }
   }
        // function lastnum(exp) {
        //   const  num=exp.match(/\d+/g);
        //   return num ? num[num.length -1]:null;
        // }
        // function factorial(n) {
        //   let result =1;
        //   for (let i = 1; i <=n; i++){
        //      result *=i
        //      return result;           
        //   }
          
        // }
   function handlebutton(value) {
    if (value==="AC") {
      setexpression("");
      setdisexp("");
      setresult("0");
    } 
    else if(value==="DEL") {
        setdisexp(disexp.slice(0,-1));
        setexpression(expression.slice(0,-1));
    } 
    else if(scical.hasOwnProperty(value)){
      setdisexp(disexp + value),
      setexpression(expression + scical(value))
    }
    else if(value ==="!"){
        const lastnum = Lastnumber(expression);
        if(lastnum != null){
           const num = parseFloat(lastnum);
           setdisexp(disexp + value);
           setexpression(expression.replace(lastnum,factorial(num)));
        }

    }

    else if ( value ==='=')calcResult();

     
    else{
      setexpression(expression + value);
      setdisexp(disexp + value);


    }
    
   }
     
   function factorial(n) {
    let result =1;
    for (let i = 1; i <=n; i++)
       result *=i
       return result;           
    
    
  }
   function extractLastNum(exp) {
    const  num=exp.match(/\d+/g);
    return num ? num[num.length -1]:null;
  }
  
  
  return(
    
        <div className="Main">
          <div className="App" >
            <div expression={disexp} result={result}>{disexp}</div>
          <div className="expression" >{expression}</div>
          <div className="result">{result}</div>
          </div>




<div className="calculator">
<div className="scikeys">

{sciname.map((item,index)=>(
  <button key={index}
  onClick={()=>handlebutton(item)}
>{item}</button>
))}
</div>
<div className="line"></div>
<div className="basickeys">

{basickey.map((item,index)=>(
<button key={index} className={`${item>="0" && item <="9" ?"number":""
     }${
      item==="=" && 
      "equal"
     }`} 
     onClick={()=>handlebutton(item)}
     >{item}</button>
))}
</div>
</div>

        
      
        </div>
      );
};
export default App;