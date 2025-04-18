import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h3>Products : {products.length} </h3>
            <table>
                <thead>
                    <tr style={{background:'blue' , color:'white' , padding: '5px'}}>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody style={{background:'yellow', colo:'red'}}>
                {
                    products.map((product,index) =>     <tr key={index}>
                    <td>{ index + 1 }</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td></td>
                </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;