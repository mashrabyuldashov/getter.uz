import React from 'react';
import { Link, NavLink } from "react-router-dom"
import "./Hero.scss"

import heroVector from "../../Assets/Images/Vector.png"
import HeroTooltip from './HeroTooltip';
import LinkSite from '../Link/LinkSite';

const Hero = () => {
    let arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2]
    return (
        <div className="hero">
            <div className="container">
                <h2 className='hero__heading'>
                    Создаем сайты и айдентику от всей <span className='hero__heading-span'>души</span>
                </h2>

                <div className='hero__about-link'>
                    <NavLink
                        to="/about"
                        className='hero__link'>

                        <span class="top"></span>
                        <span class="right"></span>
                        <span class="bottom"></span>
                        <span class="left"></span>

                        <div className="container hero__link-container">
                            <p className='hero__link-desc'>
                                Давайте обсудим и ваш проект
                            </p>

                            <img
                                className='hero__link-vector'
                                style={{ marginLeft: `${170 + ((arr.length - 1) * 50)}px` }}
                                src={heroVector} alt="Hero vector" width="59" height="45" />
                        </div>
                    </NavLink>
                    <div className='hero__profile'>
                        {
                            arr.map((e, i) => {
                                return <HeroTooltip key={i} style={i} />
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;
