import {Route, Redirect} from "react-router-dom";

function PrivateRoute({component: Component, ...rest}){
    return <Route {...rest} render = {props => {
        if(sessionStorage.getItem('token')){
            return <Component {...props}/>
        }else{
            return <Redirect to="/"/>
        }
    }}/>
} 

export default PrivateRoute;