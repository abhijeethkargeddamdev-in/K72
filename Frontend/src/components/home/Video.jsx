import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
     <video className='h-full w-full object-cover' autoPlay loop muted
     src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756492522~exp=1756496122~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=9ec2d2f1f8896e337ca30f8fefd38209ec1446edee0fd70071a7e178843528b7&r=dXMtd2VzdDE%3D">
     </video>
    </div>
  )
}

export default Video