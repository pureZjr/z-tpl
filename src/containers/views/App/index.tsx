import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Spin } from 'antd'

import styles from './index.scss'

const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ '@views/NotFound'))
const Home = lazy(() => import(/* webpackChunkName: "Home" */ '@views/Home'))
const Page1 = lazy(() => import(/* webpackChunkName: "Page1" */ '@views/Page1'))

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Suspense
                fallback={
                    <Spin
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                }
            >
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
            </Suspense>
        </div>
    )
}

export default App
