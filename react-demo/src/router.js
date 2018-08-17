import React from 'react';
import {Router, Route, Switch,Redirect} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Detail from './routes/Detail';
import Product1 from './routes/Product1';
import Product2 from './routes/Product2';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <IndexPage>
          <Route path="/products" exact component={Products}/>
          <Route path="/detail" exact component={Detail}/>
          <Route path="/product1" exact component={Product1}/>
          <Route path="/product2" exact component={Product2}/>
        </IndexPage>


      </Switch>

    </Router>
  );
}

export default RouterConfig;


