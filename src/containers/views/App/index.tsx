import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '@views/Home'
import Page1 from '@views/Page1'
import NotFound from '@views/NotFound'
import styles from './index.scss'

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Switch>
                <Route path="/" exact={true}>
                    <Home />
                </Route>
                <Route path="/page1" exact={true}>
                    <Page1 />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}

export default App
