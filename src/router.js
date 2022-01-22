import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'  
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Header from './header';
import history from './utils/history';

const RoutDefinition = (props) => {
    return (
        <Router history={history}>
        <div>
          <Header/>
          <Routes>
            <Route path="/component1" element={<Component1 />}></Route>
            <Route path="/component2" element={<Component2 />}></Route>
            <Route path="/component3" element={<Component3 />}></Route>
          </Routes>
        </div>
      </Router>
    )
}
export default RoutDefinition;