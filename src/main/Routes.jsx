import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Tamplate
import Tools from '../tamplates/Tools'
import Home from '../tamplates/Home'
import Noticias from '../tamplates/Noticias'
import GhostBit from '../tamplates/GhostBit'

// Tools
import ConvertBox from '../components/ConvertBox/ConvertBox'
import ConvertBase from '../components/ConvertBase/ConvertBase'
import ConvertUnit from '../components/ConvertUnit/ConvertUnit'
import Calculator from '../components/Calculator/src/main/Calculator'

// Area de estudo do curso
import Study from '../tamplates/Study'




export default function app() {
    return (
        <Switch>
            {/* Rotas Header */}
            <Route exact path="/" component={Home} />
            <Route path="/tools" component={Tools} />
            <Route path="/noticias" component={Noticias} />
            <Route path="/criacao-de-sites" component={GhostBit} />

            {/* Rotas Tools */}
            <Route path="/convert-box" component={ConvertBox} />
            <Route path="/convert-base" component={ConvertBase} />
            <Route path="/convert-unit" component={ConvertUnit} />
            <Route path="/calculator" component={Calculator} /> 

            {/* Area de studo do curso */}
            <Route path="/study" component={Study} /> 

            <Redirect from="*" to="/"/> 
            
        </Switch>
    )
}
