import React from 'react'

const MainVisual = () => {
  return (
    <div className='MainVisual'>
      <div className="video">
        <video src='/images/video.mp4' autoPlay loop muted>
        </video>
        <video src="https://videos.puma.net/videos/fn/%7Eregional%7EKOR%7Eothers%7E2024KR%7E0201_Palermo-IVE%7E240111_PUMA_KR_1080_1080_01.mp4" data-url="https://videos.puma.net/videos/fn/%7Eregional%7EKOR%7Eothers%7E2024KR%7E0201_Palermo-IVE%7E240111_PUMA_KR_1080_1080_01.mp4" data-provider="file" data-title="" data-fordevice="mobile" data-type="file" class="res_video"  autoPlay loop muted>
      </video>
      </div>
      <div className="banner">
        <div className="banner_wrap">
        <div className="banner_left">
          <p>
            FOREVER. <br />
            PALERMO.
          </p>
          <span>🔔팔레르모 신규 컬러 및 추가 사이즈 입고!</span>
        </div>
        <div className="banner_right">
          <img src={process.env.PUBLIC_URL+'/images/banner.avif'} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default MainVisual