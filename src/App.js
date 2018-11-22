import React from 'react'
import { BrowserRouter as Router,Link, Route } from 'react-router-dom'
import Route1 from './Route1'
import Route2 from './Route2'
import Route3 from './Route3'
import DisplayParam from './DisplayParam';

const App = (props) =>
  (
    <div>
      <Router>
        <div>
          <div>
            <ul>
              <li><Link to='/route-1'>Route1</Link></li>
              <li><Link to='/route-2'>Route2</Link></li>
              <li><Link to='/route-3'>Route3</Link></li>
            </ul>
          </div>
          <Route path="/Route-1" exact={true} component={Route1}></Route>
          <Route path="/route-2" exact={true} component={Route2}></Route>
          <Route path="/route-3" exact={true} component={Route3}></Route>
        <Route path="/param/:key" component={DisplayParam} />

        </div>
      </Router>
    </div>
  )

export default App