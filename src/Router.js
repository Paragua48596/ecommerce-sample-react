import React, { Component } from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//Paginas
import Home from './pages/Home'
import Searching from './pages/Search'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>

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

                </Switch>

            </BrowserRouter>

        )
    }
}

export default Router