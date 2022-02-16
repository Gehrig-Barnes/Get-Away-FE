import React, {useState} from 'react'

function CreateHost ({handleAddHost}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [account, setAccount] = useState(0)
    const [routing, setRouting] = useState(0)
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
            <form onSubmit={handleSubmit}>
             <section>
                 <h2>Create Account</h2>
                 <label>First Name: </label>
                    <input
                        type="text"
                        name="First"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                 <label>Last Name: </label>
                 <input
                        type="text"
                        name="Last"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                 <label>Address: </label>
                 <input
                        type="text"
                        name="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                 <label>Account Number:</label>
                 <input
                        type="integer"
                        name="account"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                    />
                 <label>Routing Number: </label>
                 <input
                        type="integer"
                        name="routing"
                        value={routing}
                        onChange={(e) => setRouting(e.target.value)}
                    />
                 <label>Email: </label>
                 <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                 <label>DOB: </label>
                 <input
                        type="text"
                        name="birth"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                 <label>Gender: </label>
                 <input
                        type="text"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                 <label>Password: </label>
                 <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <input
                            class="submit"
                            type='submit'
                            name='submit'>
                        </input>
              </div>
             </section>
            </form>

        </div>
    )
}

export default CreateHost;

