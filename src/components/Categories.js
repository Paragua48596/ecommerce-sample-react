import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                                    All electronic devices
                                </h2>
                                <p className='group__subheader'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <Link to='/search/e' className='btn'>Read more</Link>
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
                                    Men's fashion
                                </h2>
                                <p className='group__subheader'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <Link to='/search/m' className='btn'>Read more</Link>
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
                                    The best women's clothing
                                </h2>
                                <p className='group__subheader'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <Link to='/search/w' className='btn'>Read more</Link>
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