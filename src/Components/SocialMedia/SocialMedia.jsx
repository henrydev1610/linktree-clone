import React from 'react'
import './SocialMedia.css'
import cv from '../../assets/curriculo.pdf'




const SocialMedia = () => {



  const links = [
    {id:1,  urlName:'Instagram', url:'https://www.instagram.com/henry._dev/'},
    {id:2,  urlName:'LinkedIn', url:'https://www.linkedin.com/in/henry-benjamin-ant%C3%B4nio-rangel-64983220a/'},
    {id:3,  urlName:'Github', url:'https://github.com/henrydev1610'},
    {id:4,  urlName:'Download CV', url:`${cv}`},
    
  ]

  const reciverLinks = links.map((props)=>
      <div key={props.id} className='content-links'>
        <a href={props.url}download='curriculo'>{props.urlName}</a>
      </div>



  )




  return (
    <div>
      {reciverLinks}
    </div>
  )
}

export default SocialMedia
