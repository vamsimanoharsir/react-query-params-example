// import React, { useEffect, useState } from 'react';
// import QueryString2 from './QueryString2';
// import { Link } from 'react-router-dom';
// var qs=require('query-string')

// function QueryString1(props) {

//     const [name,setName]=useState()
//     const [id,setId]=useState()
//     localStorage.setItem('fromClient',false)//initially seting to false
//     //whenever reading values from localStorage use JSON.parse() because localStorage values are treated as strings
    
//     useEffect(()=>{
//         //pass id, fromClient in url and hit enter
//         const {id, fromClient}=qs.parse(window.location.search)
//         localStorage.setItem('id1',id);
//         localStorage.setItem('fromClient',fromClient);
//         console.log('query string values are : ',id,fromClient)
//     },[])

//     const handleName=(e)=>{
//         setName(e.target.value)
//         localStorage.setItem('name',name);
//     }
//     const handleId=(e)=>{
//         setId(e.target.value)
//         localStorage.setItem('id',id);
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault();
        
//     }

//     return (
//         <div>
//             <form>
//                 enter name: <input type="text" onChange={handleName}/><br/>
//                 enter id: <input type="text" onChange={handleId}/><br/>
//                 <button onClick={handleSubmit}>submit here</button>
//                 <QueryString2 name={name} id={id}/>
//             </form>
//         </div>
//     );
// }

// export default QueryString1;






import React, { useEffect, useState } from 'react';
import QueryString2 from './QueryString2';
import { Link } from 'react-router-dom';
var qs=require('query-string')

function QueryString1(props) {

    const [name,setName]=useState()
    const [id,setId]=useState()
    localStorage.setItem('fromClient',false)//initially seting to false
    //whenever reading values from localStorage use JSON.parse() because localStorage values are treated as strings
    
    useEffect(()=>{
        //pass id, fromClient in url and hit enter
        const {id, fromClient}=qs.parse(window.location.search)
        localStorage.setItem('id1',id);
        localStorage.setItem('fromClient',fromClient);
        console.log('query string values are : ',id,fromClient)
    },[])

    const handleName=(e)=>{
        setName(e.target.value)
        localStorage.setItem('name',name);
    }
    const handleId=(e)=>{
        setId(e.target.value)
        localStorage.setItem('id',id);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }

    return (
        <div>
            <form>
                enter name: <input type="text" onChange={handleName}/><br/>
                enter id: <input type="text" onChange={handleId}/><br/>
                <button onClick={handleSubmit}>submit here</button>
                <QueryString2 name={name} id={id}/>
            </form>
        </div>
    );
}

export default QueryString1;