import React, { Component } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Componentes
import Menu from './components/Menu'

//Paginas
import Home from './pages/Home'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu />

                {/*Configurar rutas y paginas*/}

                <Switch>

                    {/* Rutas */}
                    <Route exact path="/" component={Home} />

                </Switch>

            </BrowserRouter>

        )
    }
}

export default Router