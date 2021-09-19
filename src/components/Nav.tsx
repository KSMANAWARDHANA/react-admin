/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { User } from '../models/user';

const Nav =()=>{
  const[user,setUser]=useState(new User());
   
  //to display name of the logged user
  useEffect(()=>{
      (
        async ()=>{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const{data}= await axios.get('user');
          setUser(new User(
            data.id,
            data.first_name,
            data.last_name,
            data.email,
            data.role
          ));
        }
      )();
  },[]);
  //logout function to pass at onclick
  const logout =async ()=>{
      await axios.post('logout',{});
  }
   
        return(
          <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
           <ul className="my-2 my-md-0 mr-md-3">
            <Link to="/profile" className="p-2 text-decoration-none text-white " href="#">{user.name}</Link>
            <Link to="/login" className="p-2 text-white" href="#"
            onClick={logout}
            >Sign out</Link>
          </ul>
      </nav>
        )
    
}
export default Nav;
