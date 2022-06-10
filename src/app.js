import React from 'react';
import styles from './styles/styles.scss';
import Header from './components/header/header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

const containerStyles = {
    margin: '0 auto',
    maxWidth: '1240px',
    padding: '30px',
}

const App = () => {
    return (
        <div style={containerStyles}>
            <Header />
            <Main />
            <Footer/>
        </div>
    )
}

export default App