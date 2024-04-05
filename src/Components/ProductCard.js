import React from 'react';
import { useNavigate } from 'react-router';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = ()=>{
    navigate(`/product/${item.id}`);
  }
  return (
    <div className='ProductCard' 
    onClick={showDetail}>
      <img src={item?.img} alt="thumNail" className='thum' />
      <div className="product_items">
        <div className="price">
          <h2 className='Title'>{item?.title}</h2>
          <p className='Price'>{item?.price}</p>
        </div>
        {/* <p className='Color'>{item?.colors.join('  |  ')}</p> */}
        <p className='Size'>Size : {item?.sizes.join(' , ')}</p>
        <div className="start_img">
          <img src={process.env.PUBLIC_URL + './images/star.png'} alt="" />
          <img src={process.env.PUBLIC_URL + './images/star.png'} alt="" />
          <img src={process.env.PUBLIC_URL + './images/star.png'} alt="" />
          <img src={process.env.PUBLIC_URL + './images/star.png'} alt="" />
          <img src={process.env.PUBLIC_URL + './images/star.png'} alt="" />
        </div>
        
        {/* <img src={item?.star} alt=""  className='star'/> */}
      </div>
    </div>
  )
}

export default ProductCard