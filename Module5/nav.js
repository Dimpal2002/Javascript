import React from 'react';
import './nav.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

const Nav=()=> {
  return (
    <div className='nav d-flex align-items-center'>
        <div className='container-fluid '>
            <div className='row position-relative'>
                <div className='col-sm-2 part1 d-flex align-items-center'>
                    <Button className='bg-g text-white catTab res-hide'>
                    <GridViewIcon /> &nbsp;Browse All Categories <KeyboardArrowDownIcon /></Button>
                </div>
                <div className='col-sm-8 part2 position-static'>
                    <nav>
                       <ul className='list list-inline'>
                        <li className='list-inline-item'>
                          <Button><Link>Home</Link></Button>
                        </li>
                        <li className='list-inline-item'>
                          <Button><Link>About</Link></Button>
                        </li>
                        <li className='list-inline-item'>
                          <Button><Link>Shop</Link></Button>
                        </li>
                        <li className='list-inline-item'>
                          <Button><Link>Vendors</Link></Button>
                        </li>
                        <li className='list-inline-item position-static'>
                          <Button><Link>Mega Menu <KeyboardArrowDownIcon /></Link></Button>
                          {/* <div className='dropdown_menu megaMenu w-100'>
                            <div className='row'>
                                <div className='col'>
                                    <h4>Fruits & Vegetables</h4>
                                    <ul>
                                        <li><Link to="">Meat & Poultry</Link></li>
                                        <li><Link to="">Fresh Vegetables</Link></li>
                                        <li><Link to="">Herbs & Seasonings</Link></li>
                                        <li><Link to="">Cuts & Sprouts</Link></li>
                                        <li><Link to="">Exotic Fruits & Veggis</Link></li>
                                        <li><Link to="">Packaged Produce</Link></li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <h4>Breakfast & Dairy</h4>
                                    <ul>
                                        <li><Link to="">Milk & Flavoured Milk</Link></li>
                                        <li><Link to="">Butter &  Margarine</Link></li>
                                        <li><Link to="">Eggs Subsitutes</Link></li>
                                        <li><Link to="">Marmalades</Link></li>
                                        <li><Link to="">Sour Cream</Link></li>
                                        <li><Link to="">Cheese</Link></li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <h4>Meat & Seafood</h4>
                                    <ul>
                                        <li><Link to="">Breakfast Sausage</Link></li>
                                        <li><Link to="">Dinner Sausage</Link></li>
                                        <li><Link to="">Chicken</Link></li>
                                        <li><Link to="">Sliced Deli Meat</Link></li>
                                        <li><Link to="">Wild Caught Filtes</Link></li>
                                        <li><Link to="">Carb and Shellfish</Link></li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <img src='https://nest.botble.com/ac-efb93f2f7db80161552ce246c6018b57f41096d0/ILSDKVYFGXPH/default/5b29f6f91362835a99a1c5650cb6c678' className='w-100' />
                                </div>
                            </div>
                          </div> */}
                        </li>
                        <li className='list-inline-item'>
                          <Button><Link>Blogs</Link></Button>
                        </li>
                        <li className='list-inline-item'>
                          <Button><Link>Pages <KeyboardArrowDownIcon />
                          </Link>
                          </Button>
                          {/* <div className='dropdown_menu'>
                                            <ul>
                                                <li><Button><Link to="/about">About Us</Link></Button></li>
                                                <li><Button><Link to="/about">Contact</Link></Button></li>
                                                <li><Button><Link to="/about">My Account</Link></Button></li>
                                                <li><Button><Link to="/about">Login</Link></Button></li>
                                                <li><Button><Link to="/about">Register</Link></Button></li>
                                                <li><Button><Link to="/about">Forgot password</Link></Button></li>
                                                <li><Button><Link to="/about">Reset password</Link></Button></li>
                                                <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                                <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                                <li><Button><Link to="/about">Terms of Service</Link></Button></li>
                                                <li><Button><Link to="/about">404 Page</Link></Button></li>
                                            </ul>
                                        </div> */}
                        </li>
                        <li className='list-inline-item'>
                          <Button><Link>Contact</Link></Button>
                        </li>
                       </ul>
                    </nav>
                </div>
                <div className='col-sm-2 part3 d-flex align-items-center'>
                <div className='phNo d-flex align-items-center'>
                         <span><HeadphonesOutlinedIcon /></span>
                         <div className='info ml-3'>
                            <h3 className='text-g mb-0'>1900 - 888</h3>
                            <p className='mb-0'>24/7 Support Center</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav;
