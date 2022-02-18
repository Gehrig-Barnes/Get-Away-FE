import React, {useState} from 'react'
import { Card } from 'react-bootstrap';
import umbrella from '../umbrella.png';

function CreateHost ({handleAddHost}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [account, setAccount] = useState(null)
    const [routing, setRouting] = useState(null)
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    
    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:9292/hosts', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                host_address: address,
                account_number: account,
                routing_number: routing,
                email: email,
                dob: dob,
                gender: gender,
                password: password
            }),
        })
        .then((r) => r.json())
        .then((newHost) => handleAddHost(newHost))
    }

    return (
        <div>
            <h1>Create</h1>
            <h1>Create</h1>
            <Card 
                style={{ width: '20rem'}}
                className="create_login"
            >
                <Card.Img variant="top" src={umbrella} alt="umbrella" />
                <Card.Body>
                    <Card.Title><h2>Create Account</h2></Card.Title>
                    <form onSubmit={handleSubmit}>
                        <section>
                            <input
                                placeholder='First Name'
                                type="text"
                                name="First"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                    placeholder='Last Name'
                                    type="text"
                                    name="Last"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                            />
                            <input
                                    placeholder='Address'
                                    type="text"
                                    name="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                            />
                            <input
                                    placeholder='Account Number'
                                    type="integer"
                                    name="account"
                                    value={account}
                                    onChange={(e) => setAccount(e.target.value)}
                            />
                            <input
                                    placeholder='Routing Number'
                                    type="integer"
                                    name="routing"
                                    value={routing}
                                    onChange={(e) => setRouting(e.target.value)}
                            />
                            <input
                                    placeholder='Email'
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                    placeholder='Birth'
                                    type="text"
                                    name="birth"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                            />
                            <input
                                    placeholder='Gender'
                                    type="text"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                            />
                            <input
                                    placeholder='Password'
                                    type="text"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                            />
                            <div>
                                <input
                                    value="Get Away!"
                                    class="submit"
                                    type='submit'
                                    name='submit'> 
                                    
                                </input>
                            </div>
                        </section>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CreateHost;

