/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import Menu from './Menu'
import Nav from './Nav'

const Wrapper=(props:any)=> {
    const [redirect,setDirect] = useState(false);
    useEffect(()=>{
        (
          async ()=>{
              //if an error happens try catch will catch the error and display an  unauthenticated message
            try{
                const{data}= await axios.get('user');
            }catch(e){

            }
            
            
          }
        )();
    },[]);

    if(redirect){
        return <Redirect to="/login"/>
    }

  
        return (
        <>
            <Nav/>

                <div className="container-fluid">
                <div className="row">
                    <Menu/>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            {props.children}
                    </main>
                </div>
                </div>
        </>
        )
    
}

export default Wrapper;