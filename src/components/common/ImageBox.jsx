import React from 'react'

const ImageBox = (props) => {
    return (
        <div className={`key-box join-box ${props.className}`}>
            <div className="image image-group mb-4">
                <img src={props.img} alt="image" />
                <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            </div>
            <div className="text">
                <h6 className={`text-[#F8F8F8] text-[22px] font-medium mb-4 ${props.headingClass}`}>{props.heading}</h6>
                { (props.para) ? (<p className='text-[#CCCCCC] text-[18px] font-light'>{props.para}</p>) : null} 
            </div>
        </div>
    )
}

export default ImageBox