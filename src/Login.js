import React from 'react';
import {Button} from "@material-ui/core";
import {auth ,provider} from "./firebase";
import "./Login.css";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";




function Login() {

    const [state, dispatch] = useStateValue();
    const signIn = () => {

        auth
        .signInWithPopup(provider)
        .then (( result )  => { 

            dispatch ({

                type: actionTypes.SET_USER,
                user: result.user,
                
            })    
          })
        .catch((error )=> alert(error.message));
       
    };

    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1500px-Facebook_Logo_%282019%29.png"  alt=""/>
            <img src="https://www.wtoc.com/resizer/I-92A0SuAmlL-p7up-c5-_eTyRI=/1200x0/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/ORWYWVALSNHDBCYFKKRWLWACGI.png"  alt=""/>
            <Button type="submit" onClick={signIn}>
            Sign In                
            </Button>
            </div>
            
        </div>
    )
}

export default Login;
