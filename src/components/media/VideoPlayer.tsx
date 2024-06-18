import React from 'react'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const VideoPlayer: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div>
      <ReactPlayer
        playsInline
        url={url}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  )
}

export default VideoPlayer
