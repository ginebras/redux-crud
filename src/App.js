import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//COMPONENTS
import Navbar from './components/navbar';
import Products from './components/products';
import EditProducts from './components/editProducts';
import NewProducts from './components/newProducts';

//REDUX
import { Provider } from 'react-redux';
import store from './store';

const App=()=> {
    return (
        <div>
            <Router>
                <Provider store={store}>    
                    <Navbar/>
                    
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Products/>}/>    
                            <Route exact path="/products/create" element={<NewProducts/>}/>
                            <Route exact path="/products/edit/:id" element={<EditProducts/>}/>
                        </Routes>    
                    </div>
                </Provider>
            </Router>
        </div>
  );
}

export default App;
