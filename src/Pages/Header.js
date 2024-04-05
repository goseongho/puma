import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Header = ({authentication, setAuthenticate}) => {
  const navigate = useNavigate();
  const goTologin = () =>{
    navigate('/login')
  }
  const search=(event)=>{
    if(event.key==="Enter")
    event.preventDefault();
    let keyword = event.target.value;
    navigate(`/?q=${keyword}`)
  }
  return (
    <div className='Header'>
      <div className="header_top">
        <span>무료배송, 14일내 무료반품</span>
      </div>
      <div className="header_bottom">
        <div className="bottom_inner">
        <div className="logo">
          <Link to="/" className='logo_img'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
          </Link>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#none">신상품</a>
            </li>
            <li>
              <a href="#none">여성</a>
            </li>
            <li>
              <a href="#none">남성</a>
            </li>
            <li>
              <a href="#none">아동</a>
            </li>
            <li>
              <a href="#none">스포츠</a>
            </li>
            <li>
              <a href="#none">컬렉션</a>
            </li>
            <li>
              <a href="#none">세일</a>
            </li>
            <li>
              <a href="#none">🧨라스트피스</a>
            </li>
          </ul>
        </div>
        </div>
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search_icon' />
          <input type="text" placeholder='PUMA.COM 검색하기' />
          <div className="header_icon">
          <FontAwesomeIcon icon={faCartShopping} className='shop_icon'/>
          <Link to="/login" className='login' onClick={goTologin}><FontAwesomeIcon icon={faUser} className='user_icon' />
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header