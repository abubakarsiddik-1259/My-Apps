import React from 'react';
import Bannar from './Bannar.Jsx';
import useProducts from '../Hook/useProducts';
import { Link } from 'react-router';
import ProductCard from './ProductCard';

const Home = () => {

      const {products, loading, error} = useProducts()

      
    const featuredProducts = products.slice(0,8).sort((a, b) => b.ratingAvg - a.ratingAvg);
    return (
        <div className='bg-gray-100'>
           <div className="">
             <Bannar></Bannar>
           </div>
                     <div className=" pt-16 pb-8">
                <h1 className='text-4xl text-[#001931] font-bold pb-5'>Trending Apps</h1>
                <h3 className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</h3>

                
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {featuredProducts.map(product => (
                <ProductCard  key={product.id} product={product}  ></ProductCard>
            ))}
            
           </div>
           <div className="">
            <Link className='btn mx-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] my-8 text-white'  to="/products" >See All Products</Link>
           </div>
        </div>
    );
};

export default Home;