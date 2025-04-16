import React, { useRef } from 'react';

const UnControlled = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
          <input ref={emailRef} type="email" name="email" id="" />
            <br />
            <input ref={passwordRef} type="password" name="password" id="" />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
};

export default UnControlled;