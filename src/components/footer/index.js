import React from 'react';

import { FaHeart, FaFacebookF, FaTwitter, FaInstagramSquare, FaGithub } from 'react-icons/fa';
import './style.css'

function Footer() {
    return (
        <>
            <footer className='page-footer'>
                <div className='footer-Bar'  >
                    <div className='footer-container'>
                        <div className="icons-line">
                            <FaFacebookF className='footer-icons' />
                            <FaTwitter className='footer-icons' />
                            <FaInstagramSquare className='footer-icons' />
                            <FaGithub className='footer-icons' />
                        </div >
                        <div className='text-line'>
                            <small className="" >
                                © 2021 Made with <FaHeart style={{ color: 'red' }} /> by
                                <span> Munir Nuristani</span>
                            </small>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
