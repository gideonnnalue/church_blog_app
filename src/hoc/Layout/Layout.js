import React from 'react';
import Auxs from '../Auxs';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

const layout = (props) => (
    <Auxs>
        <Toolbar />
        <main>
            {props.children}
        </main>
        <Footer />
    </Auxs>
    
)

export default layout;