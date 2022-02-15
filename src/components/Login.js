import React, {useState, useEffect} from 'react';

function Login ({setEmail}) {
    
    function manageEmail(e){
        const value = e.target.value
        setEmail(value)
    }

    

    return (
        <div>
            <h1>this is the login</h1>
            <form >
                <label htmlFor="login" value="Email">Email:   </label><br/>
                <input type="text" name="login" onChange={manageEmail}  />
                <input type="submit" value="Login"/>
            </form>
        </div>
        
        
    )
}

export default Login;