import React from 'react'

import './instagramCard.css'


const Insta = (props) => {
    const { id, caption, media_type, media_url, permalink } = props.img
    let post

    switch (media_type) {
        case "VIDEO":
            post = (
                <div className="instagramCard-imgs__">
                    <a href={permalink} className="post__a">
                        <video width="100%" height="100%" src={media_url} type="video/mp4" permalink={permalink} />
                        <div className="instagramCard-imgs-a__vermas">
                            <p>
                                ver más
                            </p>
                        </div>
                    </a>
                </div>
            );
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <div className="instagramCard-imgs__">
                    <a href={permalink} className="post__a">
                        <img width="100%" height="100%" id={id} src={media_url} alt={caption} permalink={permalink} />
                        <div className="instagramCard-imgs-a__vermas">
                            <p>
                                ver más
                            </p>
                        </div>
                    </a>
                </div>
            );
            break
        default:
            post = (
                <div className="instagramCard-imgs__">
                    <a href={permalink} className="post__a">
                        <img width="100%" height="100%" id={id} src={media_url} alt={caption} permalink={permalink} />
                        <div className="instagramCard-imgs-a__vermas">
                            <p>
                                ver más
                            </p>
                        </div>
                    </a>
                </div>
            )
    }
    return (
        <>
            {post}
        </>

    )
}

export default Insta
