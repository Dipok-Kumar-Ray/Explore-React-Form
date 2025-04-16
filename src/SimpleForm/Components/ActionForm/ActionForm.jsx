import React from 'react';

const ActionForm = () => {

    const handleFormAction = (FormData) => {
        console.log(FormData.get('name'));
        console.log(FormData.get('email'));
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name="name" placeholder='Enter your name : ' id="" />
                <br />
                <input type="email" name="email" placeholder='Enter your email : ' id="" />
                <br />
                <input type="password" name="password" placeholder='Enter your password : '  id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ActionForm;