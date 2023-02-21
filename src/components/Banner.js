import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import laptop from '../public/images/banner.png'

class Bannner extends Component {
    render() {
        return (
            <header className='banner'>
                <div className='grid'>

                    <div className='banner__content'>
                        <h1 className='banner__headline'>Encuentra tu mejor portatil al mejor costo</h1>
                        <h2 className='banner__subheader'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tempus est, a convallis erat.</h2>
                        <Link to='/search/a' className='btn'>Explorar</Link>
                    </div>

                    <div className='banner__image'>
                        <img src={laptop} alt='laptop macbook' className='banner__img' />
                    </div>

                </div>
            </header>
        )
    }
}

export default Bannner