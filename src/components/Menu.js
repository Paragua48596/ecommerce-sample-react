import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

//Imagenes
import user_icon from '../public/images/user.png'
import cart_icon from '../public/images/cart.png'

class Menu extends Component {

    //Capturamos lo que escriban en el buscador
    search = React.createRef()

    state = {
        search: '',
        redirect: false
    }

    //Funcion que se activa al enviar el formulario
    sendSearch = (e) => {
        e.preventDefault()
        this.setState({
            search: this.search.current.value,
            redirect: true
        })
    }

    render() {

        if(this.state.redirect){
            return <Redirect to={'/redirect/' + this.state.search} />
        }

        return (
            <nav className='navbar'>
                <div className='logo'>
                    <h1 className='logo__name'><NavLink to='/' className='navlink'>Logo</NavLink></h1>
                </div>

                <div className='search'>
                    <form onSubmit={this.sendSearch}>
                        <input type="text" placeholder="Search..." name="search" ref={this.search}/>
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