import React, { Component } from 'react'

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

//Paginas
import Home from './pages/Home'
import Searching from './pages/Search'
import Product from './pages/Product'

class Router extends Component {
    render() {
        return (
            <HashRouter>

                {/*Configurar rutas y paginas*/}

                <Switch>

                    {/* Rutas */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/search/:category?/:search?" component={Searching} />
                    <Route exact path='/redirect/:search' render={(props) => {
                        var search = props.match.params.search
                        return (
                            <Redirect to={'/search/a/' + search} />
                        )
                    }} />
                    <Route exact path='/product/:id' component={Product} />
                </Switch>

            </HashRouter>

        )
    }
}

export default Router