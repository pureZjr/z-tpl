import * as React from 'react'

import { createHashHistory } from 'history'
import styles from './index.scss'

const customHistory = createHashHistory()

const Page1: React.FC = () => {
    const back = () => {
        customHistory.push('/')
    }

    return (
        <div className={styles.container}>
            <h1>Page1</h1>
            <div className={styles.back} onClick={back}>
                返回
            </div>
        </div>
    )
}

export default Page1
