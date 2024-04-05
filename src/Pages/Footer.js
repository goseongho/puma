import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="FooterTop">
        <div className="top_left">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
          </div>
          <div className="list">
          <div className="support">
            <span>Support</span>
            <div className="support_list">
            <ul className='s1'>
              <li><a href="#none">자주 물어보는 질문</a></li>
              <li><a href="#none">고객센터</a></li>
              <li><a href="#none">매장위치</a></li>
              <li><a href="#none">계정정보</a></li>
              <li><a href="#none">배송관련정보</a></li>
            </ul>
            <ul className='s2'>
              <li><a href="#none">환불 정책</a></li>
              <li><a href="#none">개인정보처리방침</a></li>
              <li><a href="#none">이용약관</a></li>
              <li><a href="#none">구매이용약관</a></li>
            </ul>
            </div>
          </div>
          <div className="about">
            <span>About PUMA (외부링크연결)</span>
            <div className="about_list">
            <ul className='a1'>
              <li><a href="#none">Company</a></li>
              <li><a href="#none">Corporate News</a></li>
              <li><a href="#none">Press Center</a></li>
            </ul>
            <ul className='a2'>
              <li><a href="#none">Investors</a></li>
              <li><a href="#none">Sustainability</a></li>
              <li><a href="#none">Careers</a></li>
            </ul>
            </div>
          </div>
          </div>
        </div>
        <div className="top_right">
          <div className="news">
            <span>뉴스레터 구독하기</span>
            <input type="email" placeholder='이메일' />
            <p>입렵하신 이메일 주소로 할인코드를 발송해 드립니다.</p>
          </div>
          <div className="more">
            <span>More Inspiration</span>
            <div className="more_img">
            <img src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="" />
            </div>
          </div>
          <div className="train">
            <img src={process.env.PUBLIC_URL + '/images/footer_logo.svg'} alt="" />
            <span>TRAIN WITH THE FASTEST</span>
          </div>
        </div>
      </div>
      <div className="FooterBottom"></div>
    </div>
  )
}

export default Footer