import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '@views/Home'
import Page1 from '@views/Page1'
import NotFound from '@views/NotFound'

function App() {
    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
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
