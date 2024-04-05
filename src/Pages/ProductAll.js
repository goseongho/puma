import React,{useEffect,useState} from 'react'
import ProductCard from '../Components/ProductCard';
import { useSearchParams } from 'react-router-dom';
import MainVisual from './MainVisual';
import db from '../db.json';

const ProductAll = () => {
  const [productList, setProductList]=useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async ()=>{
    let searchQuery = query.get('q')||"";
    let products = db.products;
    let filteredProducts = products.filter(products=>product=>product.title.toLowerCase().include(searchQuery.toLowerCase()));
    setProductList(filteredProducts);
  }
  useEffect(()=>{
    getProducts();
  },[query])
  return (
    <div className='ProductAll'>
      <MainVisual/>
      <div className="ProductAllInner">
        <div className='ProductTitle'>
          <div className="Top">
            <p>FOREVER. 
              PALERMO.</p>
          </div>
          <div className="Bottom">
            <span>20개 상품</span>
            <select name="" id="">
              <option value="">신상품순</option>
              <option value="">판매순</option>
              <option value="">낮은가격순</option>
              <option value="">높은가격순</option>
              <option value="">평균 등급</option>
            </select>
          </div>
        </div>
       <div className="ProductItem">
       {productList.map((item)=>(
          <ProductCard item={item} key={item.id} />
        ))}
       </div>
      </div>
    </div>
  )
}

export default ProductAll