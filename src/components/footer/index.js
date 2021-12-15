import React from 'react';
import { ExternalLink } from 'react-external-link'

import { FaHeart, FaFacebookF, FaTwitter, FaInstagramSquare, FaGithub } from 'react-icons/fa';
import './style.css'

function Footer() {
    return (
        <>
            <footer className='page-footer'>
                <div className='footer-Bar'  >
                    <div className='footer-container'>
                        <div className="icons-line">
                            <ExternalLink href={"https://www.facebook.com/munir.sami"}><FaFacebookF className='footer-icons' /></ExternalLink>
                            <ExternalLink href={'https://twitter.com/MunirNuristani'}><FaTwitter className='footer-icons' /></ExternalLink>
                            <ExternalLink href= {"https://www.instagram.com/musa___1208/"}><FaInstagramSquare className='footer-icons' /></ExternalLink>
                            <ExternalLink href={"https://github.com/munirNuristani"}><FaGithub className='footer-icons' /></ExternalLink>
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
