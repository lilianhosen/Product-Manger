import React, { useState } from 'react'
import './ProductManger.css'

const ProductManger = () => {
    const [produts,setProducts]=useState([{id:1,name:"Tv"},{id:2,name:"Iphone"},{id:3,name:"Laptop"}]);
    const [searchProduct,setSearchProduct]=useState("");
    const [newProduct,setNewProduct]=useState("");

    const AddProduct=() =>{
        if(newProduct.trim() && !produts.some(p=>p.name===newProduct)){
            const newId=Date.now();
            setProducts([...produts,{id:newId,name: newProduct}]);
            setNewProduct("")
        }
    }
    const removeProduct=(id)=>{
        setProducts(produts.filter((item)=>item.id !== id));
    };

    const renameProduct=(id,newName)=>{
        if(newName.trim() && !produts.includes(newName)){
            setProducts(produts.map((item)=> (item.id===id?{...item,name:newName}:item)));
        }
    };
    const filterProducts=produts.filter((product)=>
    product.name.toLowerCase().includes(searchProduct.toLowerCase()));

    

  return (
    <div className='product-manger'>
        <h2 className='product-manger-header'>Product Manger</h2>
        <input type="text" placeholder='search products...'  value={searchProduct} onChange={(e)=>setSearchProduct(e.target.value)} className='input-search-products'/>
        <div className='add-product'>
            <input type="text" placeholder='Enter product name' value={newProduct} onChange={(e)=>setNewProduct(e.target.value)} className='input-add-products' />
            <button onClick={AddProduct}  className='add-product-button'>Add Product</button>
        </div>
        <ul>
            {filterProducts.map((product)=>(
                <li key={product.id} className='product-name'>
                <span>{product.name}</span>
                <div>
                    <button onClick={()=>{const newName=
                        prompt("Enter New Name",product.name);
                        if(newName)
                            renameProduct(product.id,newName);
                  }} className='rename-btn'> Rename</button>
                    <button onClick={()=>removeProduct(product.id)}className='remove-btn'>Remove</button>
                </div>
                </li>
  ))}
        </ul>
    </div>
  );
}

export default ProductManger