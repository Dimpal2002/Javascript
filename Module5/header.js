import React, { useState,useEffect } from "react";
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconCompare from '../../assets/images/icon-compare.svg';
import IconHeart from '../../assets/images/icon-heart.svg';
import IconCart from '../../assets/images/icon-cart.svg';
import IconUser from '../../assets/images/icon-user.svg';

import Button from '@mui/material/Button';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import Nav from './nav/nav';
const Header =()=>{

    const [isOpenDropDown, setisOpenDropDown] = useState(false);

     const [categories, setcategories] = useState([
    //     'Milks and Dairies',
    //     'Wines & Drinks',
    //     'Clothing & beauty',
    //     'Fresh Seafood',
    //     'Pet Foods & Toy',
    //     'Fast food',
    //     'Baking material',
    //     'Vegetables',
    //     'Fresh Fruit',
    //     'Bread and Juice',
    //     'Milks and Dairies',
    //     'Wines & Drinks',
    //     'Clothing & beauty',
    //     'Fresh Seafood'
     ]);

     const countryList=[];

    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    }, []);

    const getCountry = async (url) => {
        try {
            await axios.get(url).then((res) => {
                if (res !== null) {
                    //console.log(res.data.data);
                    res.data.data.map((item, index) => {
                        countryList.push(item.country);
                        //console.log(item.country)
                    })

                    // console.log(res.data.data[0].country)
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
   <>
    <header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2">
                    <img src={Logo} alt="Noimage" />
                </div>
{/* headerSearch start here */}
                <div className="col-sm-5">
                <div className="headerSearch d-flex align-items-center">
                <Select data={categories} placeholder={'All Categories'} icon={false}/>
                    
                    <div className="search">
                        <input type="text" placeholder="Search for items..."/>
                        <SearchIcon className="searchIcon cursor"/>
                    </div>
                </div>
                </div>
{/* headerSearch start here */}
<div className='col-sm-5 d-flex align-items-center part3 res-hide'>
                                <div className='ml-auto d-flex align-items-center'>
                                    <div className='countryWrapper'>
                                        {/* <Select data={countryList} placeholder={'Your Location'} icon={<LocationOnOutlinedIcon style={{ opacity: '0.5' }} />} /> */}
                                    </div>
                                    <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                                        <ul className='list list-inline mb-0 headerTabs'>
                                            <li className='list-inline-item'>
                                                <span>
                                                    <img src={IconCompare} />
                                                    <span className='badge bg-success rounded-circle'>0</span>
                                                    Compare
                                                </span>
                                            </li>
                                            <li className='list-inline-item'>
                                                <span>
                                                    <img src={IconHeart} />
                                                    <span className='badge bg-success rounded-circle'>0</span>
                                                    Wishlist
                                                </span>
                                            </li>
                                            <li className='list-inline-item'>
                                                <span>
                                                    <img src={IconCart} />
                                                        <span className='badge bg-success rounded-circle'>0</span>
                                                        Cart
                                                </span>
                                            </li>

                                           

                                                   <li className='list-inline-item'>  
                                                        <span  onClick={()=>setisOpenDropDown(!isOpenDropDown)}>
                                                            <img src={IconUser} />
                                                            Account
                                                        </span>

                                                        {/* {
                                                             isOpenDropDown !== false &&
                                                             <ul className='dropdownMenu'>
                                                                <li><Button className='align-items-center'><Person2OutlinedIcon /> My Account</Button></li>
                                                                <li><Button><LocationOnOutlinedIcon /> Order Tracking</Button></li>
                                                                <li><Button><FavoriteBorderOutlinedIcon /> My Wishlist</Button></li>
                                                                <li><Button><SettingsOutlinedIcon /> Setting</Button></li>
                                                                <li><Button><LogoutOutlinedIcon /> Sign out</Button></li>
                                                            </ul>
                                                        } */}
                                                   
  
                                                    </li>

                                                    


                                                    {/* <li className='list-inline-item'>
                                                        <Link to={'/signIn'}>
                                                            <Button className="btn btn-g">Sign In</Button>
                                                        </Link>
                                                    </li> */}


                                            


                                        </ul>
                                    </ClickAwayListener>
                                </div>

                            </div>

            </div>
        </div>
    </header>
    <Nav  />
   </>
  )
}

export default Header