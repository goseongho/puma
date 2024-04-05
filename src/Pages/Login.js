import React from 'react'
import { useNavigate } from 'react-router'

const Login = ({setAuthentication}) => {
  const navigate = useNavigate();
  const loginUser =(event)=>{
    event.preventDefault();
    console.log('로그인 버튼 동작');
    navigate('/');
    setAuthentication(true)
  }
  return (
    <div className='Login'>
      <div className="login_wrap">
        <div className="login_box">
          <div className="login">
            <span>로그인</span>
            <span>회원가입</span>
          </div>
          <form onSubmit={(event)=>loginUser(event)}>
          <div className="email">
            <input type="email" placeholder='이메일 *' className='em'/>
            <input type="password" placeholder='비밀번호 *' className='pass'/>
            <div className="check">
              <input type="checkbox" className='c1'/>
              <span>아이디 / 비밀번호 저장</span>
            </div>
            <div div className="submit">
              <button type='submit'>로그인</button><br />
              <a href="#none">비밀번호 찾기</a>
            </div>
          </div>
          <div className="or">
            <span>또는</span>
          </div>
          <div className="sns">
          <img src={process.env.PUBLIC_URL + '/images/kakao.png'} alt="" className='kakao_img' />
            <button type='submit' className='kakao'>
              <span>카카오 계정으로 로그인</span>
            </button>
            <img src={process.env.PUBLIC_URL + '/images/naver.png'} alt="" className='naver_img' />
            <button type='submit' className='naver'>
              <span>네이버 아이디로 로그인</span>
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login