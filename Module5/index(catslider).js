import React, { useState } from 'react';
import './style.css';
import Slider from "react-slick";


const CatSlider = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea'
    ]);


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: /*context.windowWidth>992 ?*/ true/* : false*/,
        // autoplay: context.windowWidth>992 ? 2000 : false,
        // centerMode: context.windowWidth>992 ? true : false
    };

    return (
        <div className='catSliderSection'>
            <div className='container-fluid'>
            <h2 className='hd'>Featured Categories</h2>
            <Slider {...settings} className='cat_slider_Main' id="cat_slider_Main" >
                {
                    itemBg.length!==0 && itemBg.map((item,index)=>{
                        // return (
                        //     <div className='item'>
                        //     <div className='info' style={{background:item}}>
                        //         <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png' />
                        //         <h5>Cake & Milk</h5>
                        //         <p>26 items</p>
                        //     </div>
                        //     </div>
                        //     )
                        })
                        }

                       
                    <div className='item'>
                         <div className='info'>
                             <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png' />
                             <h5>Cake & Milk</h5>
                             <p>26 items</p>
                         </div>
                    </div>
                    
                    <div className='item'>
                    <div className='info'>
                        <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-12.png' />
                        <h5>Organic Kiwi</h5>
                        <p>6 items</p>
                    </div>
                    </div>
                    <div className='item'>
                    <div className='info'>
                        <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-11.png' />
                        <h5>Peach</h5>
                        <p>6 items</p>
                    </div>
                    </div>
                    <div className='item'>
                    <div className='info'>
                        <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-9.png' />
                        <h5>Read Apple</h5>
                        <p>10 items</p>
                    </div>
                    </div>
                    <div className='item'>
                    <div className='info'>
                        <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-3.png' />
                        <h5>Snacks</h5>
                        <p>11 items</p>
                    </div>
                    </div>
                    <div className='item'>
                    <div className='info'>
                        <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-1.png' />
                        <h5>Vegetables</h5>
                        <p>6 items</p>
                    </div>
                    </div>
                    <div className='item'>
                    <div className='info'>
                    <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-2.png' />
                        <h5>Strawberry</h5>
                        <p>10 items</p>
                    </div>
                    </div>
                    <div className='item'>
                    <div className='info'>
                    <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-4.png' />
                        <h5>Black Plum</h5>
                        <p>10 items</p>
                    </div>
                    </div>
                    <div className='item'>
                    <div className='info'>
                    <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-5.png' />
                        <h5>Custard Apple</h5>
                        <p>10 items</p>
                    </div>
                    </div>
                    <div className='item'>
                    <div className='info'>
                    <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-14.png' />
                        <h5>Coffee & Tea</h5>
                        <p>11 items</p>
                    </div>
                    </div>
                    <div className='item'>
                    <div className='info'>
                    <img src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-15.png' />
                        <h5>Headphone</h5>
                        <p>4 items</p>
                    </div>
                    </div>
            
                </Slider>
            </div>
        </div>
    )
}


export default CatSlider;
