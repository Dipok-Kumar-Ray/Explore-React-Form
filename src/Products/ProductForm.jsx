import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

    const [error, setError] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        


        if(name.length === 0){
            setError('Please Provide a product name')
            return;
        }
        else if(price.length === 0){
            setError('Please provide a price');
            return;
        }
        else if(price < 0){
            setError('Price can not be negative');
            return;
        }
        else{
            setError('');
        }

      const newProduct = {

        name,
        price,
        quantity
       }
       
    //    console.log(newProduct);
    handleAddProduct(newProduct);
    // if(!error){
    //     handleAddProduct(newProduct);
    // }

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
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;