import React, { useState } from 'react';

const Carousel = ({images}) => { 
    const [index, setIndex] = useState(0);
    const length = images.length
    const handlePrevious = () => { 
        const newIndex = index - 1; 
        setIndex(newIndex < 0 ? length - 1 : newIndex); 
    }; 
    const handleNext = () => { 
        const newIndex = index + 1; 
        setIndex(newIndex >= length ? 0 : newIndex); 
    }; 
    const childrens = images.map((i,index) =>         
        <img key={index} src={i} alt={'Cover '+ index}/>
    );
    return ( 
    <div className="carousel"> 
    {index > 0 && <button onClick={handlePrevious}>Previous</button> }
    { index < length-1 && <button onClick={handleNext}>Next</button> }
    <div>
        {childrens}
    </div>
    </div>
    )
}
export default Carousel;