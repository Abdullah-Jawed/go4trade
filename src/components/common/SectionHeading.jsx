import React from 'react';
import Badge from './Badge';

const SectionHeading = (props) => {
    return (
        <div className={`heading text-center mb-15 ${props.className}`}>
            { (props.badge) ? ( <Badge className='mx-auto mb-4'>{props.badge}</Badge> ) : '' }
            { (props.heading) ? (<h2 dangerouslySetInnerHTML={{ __html: props.heading }} /> ) : '' }
            { (props.para) ? (<p dangerouslySetInnerHTML={{ __html: props.para }} className='text-[#CCCCCC] text-[20px] font-extralight' />) : ''}
            
        </div>
    )
}

export default SectionHeading;