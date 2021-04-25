import React from 'react';
import './Carousel.css';

function Carousel() {
    return (
        <div className='carContainer'>
            <div className="slideChange">
                <div className="prev">
                    &lt;
                </div>
                <div className="next">
                    &gt;
                </div>
            </div>
            <div className="dotContainer">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
}

export default Carousel;
