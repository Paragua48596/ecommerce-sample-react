import React, { Component } from 'react'
import iphone from '../public/images/iphone.png'
import rolex from '../public/images/rolex.png'
import leather from '../public/images/leather.png'
class Categories extends Component {
    render() {
        return (
            <section className='categories'>
                <div className='grid'>

                    <div className='group electronic'>
                        <div className='grid'>

                            <div className='group__content'>
                                <h2 className='group__headline'>
                                    Encuentra electronica de consumo
                                </h2>
                                <p className='group__subheader'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <a className='btn'>Ver mas</a>
                            </div>

                            <div className='group__image'>
                                <img src={iphone} alt='iphone 14' />
                            </div>

                        </div>
                    </div>

                    <div className='group men'>
                        <div className='grid'>

                            <div className='group__content'>
                                <h2 className='group__headline'>
                                    La mejor moda para hombres
                                </h2>
                                <p className='group__subheader'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <a className='btn'>Ver mas</a>
                            </div>

                            <div className='group__image'>
                                <img src={rolex} alt='iphone 14' />
                            </div>
                            
                        </div>
                    </div>

                    <div className='group women'>
                        <div className='grid'>

                            <div className='group__content'>
                                <h2 className='group__headline'>
                                    Encuentra moda femenina
                                </h2>
                                <p className='group__subheader'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <a className='btn'>Ver mas</a>
                            </div>

                            <div className='group__image'>
                                <img src={leather} alt='iphone 14' />
                            </div>
                            
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default Categories