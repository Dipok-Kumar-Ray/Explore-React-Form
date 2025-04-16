import React, { useState } from 'react';

const Controlfield = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
       

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        if(password.length < 6){
            setError(' 6 characters or longer password needed');
        }
        else{
            setError('');
        }

    }

    const handlePasswordOnChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length <= 6)
        {
            setError('Password must be 6 characters or longer. ')
        }

        else{
            setError(' ');
        }
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter your email : ' name="email" id="" required/>
                <br />
                <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name="password"  placeholder='Enter your password : '  id="" required/>
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