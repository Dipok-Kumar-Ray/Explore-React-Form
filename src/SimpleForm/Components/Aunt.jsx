import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
           <h3>Aunt</h3>
           <section className='flex'>
            <Cousin asset={asset} name='Tom Tom'></Cousin>
            <Cousin name='Khala, Khalu'></Cousin>
           </section>
        </div>
    );
};

export default Aunt;