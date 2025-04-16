import React, { useState } from 'react';

const Controlfield = () => {

    const [password, setPassword] = useState('');
       

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);

    }

    const handlePasswordOnChange = e =>{
        console.log(e.target.value);
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
        </div>
    );
};

export default Controlfield;