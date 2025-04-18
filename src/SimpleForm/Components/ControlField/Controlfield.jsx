import React, { useState } from 'react';

const Controlfield = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
       

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
        if(password.length < 6){
            setError(' 6 characters or longer password needed');
        }
        else{
            setError('');
        }

    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordOnChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }

   return (
        <div>
            <form  onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" name="name" placeholder='Enter your name : ' defaultValue={name} onChange={handleNameChange}  />
                <br />
                <label> Email : </label>
                <input type="email" onChange={handleEmailChange} placeholder='Enter your email : ' name="email" defaultValue={handleEmailChange} required/>

                <br />
                <label> Password : </label>
                <input type="password"  onChange={handlePasswordOnChange} defaultValue={password} name="password"  placeholder='Enter your password : '  required/>


                <br />
                <input type="submit" value="Submit"   />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default Controlfield;