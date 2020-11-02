import * as React from 'react'

import IconNotfound from '@assets/svgs/404.svg'
import styles from './index.scss'

const NotFound: React.FC = () => {
    return (
        <div className={styles.container}>
            <IconNotfound className="no-fill" />
        </div>
    )
}

export default NotFound
