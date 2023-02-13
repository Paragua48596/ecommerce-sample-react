import React, { Component } from 'react'

//Imagenes
import user_icon from '../public/images/user.png'
import cart_icon from '../public/images/cart.png'

class Menu extends Component {
    render() {
        return (
            <nav className='navbar'>
                <div className='logo'>
                    <h1 className='logo__name'>Logo</h1>
                </div>

                <div className='search'>
                    <form action=''>
                        <input type="text" placeholder="Search..." name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>

                <div className='icons'>
                    <img src={cart_icon} className='icons__img' alt='carrito de compras'/>
                    <img src={user_icon} className='icons__img' alt='usuario'/>
                </div>
            </nav>
        )
    }
}

export default Menu