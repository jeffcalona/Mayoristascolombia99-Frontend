import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Insta from './Insta'

import './instagramCard.css'
import '../../Index.css'

import Slider from "react-slick"


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const InstagramCardComponent = ({ token, limit }) => {
    const [imgs, setImgs] = useState([])

    const tokenProp = useRef(token)
    tokenProp.current = token

    useEffect(() => {
        const abortController = new AbortController();

        const fetchInstagramImg = () => {
            try {
                axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&limit=${limit}&access_token=${token}`).then((resp) => {
                    setImgs(resp.data.data)
                })
            } catch (error) {
                console.log('error', error)
            }
        }

        fetchInstagramImg()

        return () => {
            abortController.abort()
        }
    }, [limit, token])

   var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              initialSlide: 6,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              initialSlide: 5,
              infinite: true
            }
          },
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 3,
              infinite: true,
              dots: false
            }
          }
        ]
      };

    return (
        < div className = "instagramCard" >
            <h3>instagram</h3>
            <Slider {...settings} className="instagramCard__imgs">
                {
                    imgs.map(img => (
                            <Insta key={img.id} img={img} />
                    ))
                }
            </Slider>
        </div >
    )
}

export default InstagramCardComponent
