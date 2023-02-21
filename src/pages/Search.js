import React, { Component } from 'react'

import axios from 'axios'

class Search extends Component {
    state = {
        category: '',
        articles: [],
        status: false
    }

    componentDidMount() {

        //Guardamos los parametros
        var category = this.props.match.params.category
        var search = this.props.match.params.search

        if (category === "a") {
            this.getAllArticles();
        } else {
            switch (category) {
                case "e":
                    this.getAllSpecificCategory("electronics");
                    break;
                case "w":
                    this.getAllSpecificCategory("women's clothing");
                    break;
                case "m":
                    this.getAllSpecificCategory("men's clothing");
                    break;
                case "j":
                    this.getAllSpecificCategory("jewelery");
                    break;
            }

        }
    }

    getAllArticles = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(articles => {
                this.setState({
                    category: 'all',
                    articles: articles.data,
                    status: articles.status
                })
                console.log(articles)
            })

    }

    getAllSpecificCategory = (category) => {
        axios.get('https://fakestoreapi.com/products/category/' + category)
            .then(articles => {
                this.setState({
                    category: 'all',
                    articles: articles.data,
                    status: articles.status
                })
                console.log(articles.data)
            })
    }

    render() {

        //Verificamos si hay articulos en el State
        if (this.state.articles.length >= 1) {

            //Recorremos array de articulos
            var listArticles = this.state.articles.map((product) => {
                //Retornamos un JSX de cada articulo
                return (
                    <article className='product'>

                        <div className='product__image'>
                            <img src={product.image} alt={product.title} className='product__img' />
                        </div>
                        <hr className='product__line' />
                        <div className='product__content'>
                            <p>$ {product.price}</p>
                            <h2>{product.title}</h2>
                        </div>

                    </article>
                )
            })

            return (
                <section className='products'>
                    <div className='flex'>
                        {listArticles}
                    </div>
                </section>
            )

        } else {
            return (
                <h1>Cargando...</h1>
            )
        }
    }
}

export default Search