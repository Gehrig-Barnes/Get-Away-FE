import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import umbrella from '../umbrella.png';

function Login ({handleEmail, handlePassword, hostData, email}) {
    

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
            <Card style={{ width: '30rem' }} className="login_card">
            <Card.Img variant="top" src={umbrella} alt="umbrella" />
            <Card.Body>
                <Card.Title><h2>Welcome back</h2></Card.Title>
                <Card.Text>
                Login to your account
                </Card.Text>

            {/* email and password login */}
                <form onSubmit={manageLogin}>
                    <label htmlFor="login" value="Email"></label><br/>
                    <input
                        type="text"
                        name="login"
                        onChange={handleEmail}
                        placeholder="Email"  /><br></br>
                    <input
                        type="password"
                        name="login"
                        onChange={handlePassword}
                        placeholder="Password"  /><br></br>
                    <input type="submit" value="Login" className="loginbutton"/>
                </form>

            </Card.Body>
            </Card>
        </div>
        
        
    )
}

export default Login;