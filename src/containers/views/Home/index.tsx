import * as React from 'react'

import styles from './index.scss'

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Z</h1>
            <img className={styles.logo} src={'https://note.ss.purevivi.chat/Fnn562fSUBw4HdUH7GOH8sWD0GnH'} />
            <a href={'#/page1'}>page1</a>
        </div>
    )
}

export default Home
