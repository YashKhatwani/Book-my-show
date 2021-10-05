import React from 'react';
// import {Link} from 'react-router-dom';

const Poster = (props) => {
    return(
        <div className="flex flex-col gap-2 px-1 md:px-3">
            <div className="h-40 md:h-80">
                <img src={props.src} alt='poster' className='w-full h-full rounded-md'></img>
            </div>
            <h3
                    className={`text-lg font-bold ${
                        props.isDark ? "text-white" : "text-gray-700"
                    }`}
                >
                    {props.title}
                </h3>
            <p className={`text-sm ${props.isDark ? "text-white":"text-gray-black"}`}>
                {props.subtitle}
            </p>
        </div>
    )
}

export default Poster;