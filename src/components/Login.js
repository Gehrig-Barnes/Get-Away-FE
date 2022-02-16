import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Login ({handleEmail, hostData, email}) {
    

    console.log(hostData)

    console.log(email)
    let navigate = useNavigate();

    function manageLogin(e){
        e.preventDefault();
        hostData.map((host) => {
            if(host.email === email)
                navigate('/host')
        })
    }
       
    

    return (
        <div>
            <h1>this is the login</h1>
            <form onSubmit={manageLogin}>
                <label htmlFor="login" value="Email">Email:   </label><br/>
                <input type="text" name="login" onChange={handleEmail}  />
                <input type="submit" value="Login"/>
            </form>
        </div>
        
        
    )
}

export default Login;