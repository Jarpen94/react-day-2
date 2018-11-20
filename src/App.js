import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Route1 from './Route1'
import Route2 from './Route2'
import Route3 from './Route3'

const App = (props) => (
    <div>
        <BrowserRouter>
            <div>
                <Route1 />
                <Route2 />
                <Route3 />
            </div>
        </BrowserRouter >
    </div >
)


export default App