import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import umbrella from '../umbrella.png';

function Login ({handlePassword, handleLogin}) {
    const [email, setEmail] = useState('')

    let navigate = useNavigate();

    function manageLogin(e){
        e.preventDefault();
        fetch('http://localhost:9292/login', {
            method: "POST",
            body: JSON.stringify({
                email,
            }),
            headers: {
                "Content-type": "application/json",
            }

        })
        .then((r) => r.json())
        .then((data) => {
            handleLogin(data)
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
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"  /><br></br>
                    <input
                        type="password"
                        name="login"
                        onChange={handlePassword}
                        placeholder="Password"  /><br></br>
                    <input type="submit" value="Login" className="loginbutton"/>
                </form>
                <p>
                    <Link to='/create' className="createaccount">Create Account</Link>
                </p>

            </Card.Body>
            </Card>
        </div>
        
        
    )
}

export default Login;