import * as React from 'react'
import * as ReactDom from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from '@views/App'
import '../src/styles/app.scss'

const render = () => {
    ReactDom.render(
        <HashRouter>
            <App />
        </HashRouter>,
        document.querySelector('#app')
    )
}
render()
