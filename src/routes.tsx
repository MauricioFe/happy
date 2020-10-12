import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
export default function routes() {
    return (
        <div>
            <BrowserRouter>
            <Route path="/" component={Landing}/>
            <Route path="/app" component={OrphanagesMap}/>
            </BrowserRouter>
        </div>
    )
}
