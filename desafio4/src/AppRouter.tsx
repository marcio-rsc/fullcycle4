import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing/landing';
import UserList from './pages/UserList/userlist';

function AppRouter(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/users" component={UserList} />
        </BrowserRouter>
    );
}

export default AppRouter;