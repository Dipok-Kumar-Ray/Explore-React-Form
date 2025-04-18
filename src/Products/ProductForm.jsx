import React from 'react';

const ProductForm = () => {

    const handleFormSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        

      const newProduct = {

        name,
        price,
        quantity
       }
       
       console.log(newProduct);

    }


    return (
        <div>
            <h1>Active Product Management : </h1>
            <form  onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder='Enter your name : ' />
                <br />
                <input type="text" name="price" placeholder='Enter your Price : ' />
                <br />
                <input type="text" name="quantity" placeholder='Enter your Quantity : '/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;