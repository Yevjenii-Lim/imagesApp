import React, { useState } from 'react'

let Tag = ({tag}) => {
  
    return  <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 text-sm font-semibold mr-2">
        #{tag}
  </span>
}


const ImageCard = ({image, growImage}) => {
    let [grow, setGrow] = useState(true)

    let increaseHeight = () => {
        setGrow(false)
        growImage(image.id)
    }
    let decricHeight = () => {
   
    }

    let height = image.showBig ? "h-20 duration-500 " : 'h-100 absolute bg-white top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4' 

    let clsess = "max-w-sm rounded overflow-hidden shadow-lg duration-500 bg-white " + height
    let tags = image.tags.split(',')
    return (
        <div className="duration-500 ">
      <div onClick={increaseHeight} onMouseLeave={decricHeight} className={clsess}>
        <img src={image.webformatURL} alt="random" width="w-full"/>
        <div className="px-6 py-4">

        <div className=" text-purple-500 text-xl-mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>DOwnloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
        {tags.map(i => (
            <Tag key={i} tag={i}></Tag>
        ))}
      </div>
       
        </div>
    </div>
    )
}

export default ImageCard
