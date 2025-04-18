import React from 'react';
import useInputField from './UseInputField';

const HookForm = () => {

    const [ name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log( name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}></form>
            <input type="text" defaultValue={name} onChange={nameOnChange} />
            <br />
            <input type="email" defaultValue={email} onChange={emailOnChange} name="email" />
            <br />
            <input type="password" defaultValue={password} name="password" onChange={passwordOnChange} />
            <br />
            <input type="submit" value="Submit" />
        </div>
    );
};

export default HookForm;