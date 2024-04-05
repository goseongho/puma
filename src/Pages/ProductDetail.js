import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';
import db from '../db.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfStroke} from "@fortawesome/free-solid-svg-icons";

const ProductDetail = ({item}) => {
  let [product, setProduct]=useState([null]);
  let {id} = useParams();
  useEffect(() => {
    const selectedProduct = db.products.find((item) => item.id === Number(id));
    setProduct(selectedProduct);
  }, [id]);
  return (
    <div className='ProductDetail'>
      <div className="detail_path">
        <a href="#none">홈</a>
        <a href="#none">컬렉션</a>
        <a href="#none">라이프스타일</a>
        <a href="#none">FOREVER. PALERMO.</a>
        <a href="#none">{product.title}</a>
      </div>
      <div className="ProductDetailInner">
        <div className="detail_left">
          <img src={product?.img} alt="detail" />
        </div>
        <div className="detail_right">
          <div className="detail_item">
            <div className="item_title">
              <h3>{product?.title}</h3>
              <div className="item_star">
                <FontAwesomeIcon icon={faStar} className='fastar' />
                <FontAwesomeIcon icon={faStar} className='fastar' />
                <FontAwesomeIcon icon={faStar} className='fastar' />
                <FontAwesomeIcon icon={faStar} className='fastar' />
                <FontAwesomeIcon icon={faStarHalfStroke} className='fastar' />
                <p>19개의 상품평 보기 or <span>상품평 작성하기</span></p>
              </div>
            </div>
            <div className="item_detail">
              <h3>{product?.price}</h3>
              <span>( 부가세 10% 포함 )</span>
              <p>Colors : {product?.colors}</p>
            </div>
            <div className="item_btn">
              <a href="#none">장바구니에 추가하기</a>
              <a href="#none">바로 구매하기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail