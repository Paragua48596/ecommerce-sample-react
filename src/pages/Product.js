import React, { Component } from 'react'
import axios from 'axios'
import Menu from '../components/Menu'

import male from '../public/images/male.png'
import star from '../public/images/star.png'

class Product extends Component {

    state = {
        article: undefined,
        status: ''
    }

    componentDidMount() {
        this.getArticle()
    }

    getArticle = () => {
        //Obtenemos ID del producto en la URL
        const id = this.props.match.params.id

        //Pedimos articulo a la API
        axios.get('https://fakestoreapi.com/products/' + id)
            .then(res => {
                //Guardamos el articulo en el State
                var article = res.data
                console.log(res)
                this.setState({
                    article: article,
                    status: 200
                })
            })
            .catch((err) => {
                this.setState({
                    article: undefined,
                    status: 200
                })
            })
    }

    render() {
        //Verificamos el state
        if (this.state.article !== undefined) {
            var product = this.state.article

            return (
                <React.Fragment>
                    <Menu />

                    <main>
                        <section className='singleArticle'>
                            <article className='article'>

                                <div className='article__image'>
                                    <img src={product.image} alt={product.title} className='article__img' />
                                </div>

                                <div className='article__details'>

                                    <h1 className='article__title'>{product.title}</h1>
                                    <p className='article__desc'>{product.description}</p>
                                    
                                    <div className='rating'>
                                        <p className='rating__p'>
                                            <img src={star} alt='star' className='article__icon'/>
                                            {product.rating.rate}
                                        </p>
                                        <p className='rating__p'>
                                            <img src={male} alt='male' className='article__icon'/>
                                            {product.rating.count}
                                        </p>
                                    </div>

                                    <p className='article__price'>$ {product.price}</p>
                                    
                                    <button className='btn btn-buy'>Buy</button>

                                </div>

                            </article>
                        </section>
                    </main>
                </React.Fragment>
            )
        } else {
            return (
                <div className='container'>
                    <div class="loader"></div>
                </div>
            )
        }
    }
}

export default Product