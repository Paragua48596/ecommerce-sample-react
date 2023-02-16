import React, { Component } from 'react'

//Componentes
import Menu from '../components/Menu';
import Bannner from '../components/Banner';
import Categories from '../components/Categories';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Bannner />
                <main>
                    <Categories />
                </main>
            </React.Fragment>
        )
    }
}

export default Home