import * as React from 'react'

import * as styles from './index.scss'

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Z</h1>
            <img className={styles.logo} src={require('@assets/imgs/logo.jpg')} />
            <a href={'#/page1'}>page1</a>
        </div>
    )
}

export default Home
