import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
//import {storeProducts} from '../data.js';
import {ProductConsumer} from '../Context';

class Productlist extends Component {
    //state={
    //    products:storeProducts
   // }
    
    render() {
        //console.log(this.state.products);
        return (
           <React.Fragment>
               <div className="py-5">
                   <div className="container">
                       
                      
                      
                       <div className="row">
                           <ProductConsumer>
                                {value =>{
                                    return value.products.map(product=>{
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}     
                           </ProductConsumer>
                       </div>
                   </div>
               </div>

           </React.Fragment>
        );
    }
}

export default Productlist;