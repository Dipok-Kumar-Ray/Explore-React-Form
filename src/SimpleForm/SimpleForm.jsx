import React from 'react';

const SimpleForm = () => {

    const handleBtn = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
      }
    return (
      

        <div>
          <form onSubmit={handleBtn}>
            <input type="text" name='name' placeholder='Enter your name : ' />
            <br />
            <input type="email" name='email' placeholder='Enter your Email : '/>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
};

export default SimpleForm;