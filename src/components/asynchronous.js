import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreatorsAsyn } from '../state/index';
import { useState,useEffect } from 'react';
import axios from 'axios';
function AsyncComponent() {
    const dispatch = useDispatch();
    const{axiosRequested,axiosSuccess,axiosError}=bindActionCreators(actionCreatorsAsyn,dispatch);
    const DATA = useSelector((state)=>state.asynDATA);
     
   
    console.log(DATA);
    let calldata = ()=>{
        axiosRequested();
        axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response)=>{
        const users = response.data.map((user)=>user.id);
        axiosSuccess(users)
    

       }).catch((error)=>{
        console.log(error);
        axiosError(error)
       })
  
    }
     return (
       <div className='dogcat'>
       <button onClick={calldata} >GET DATA</button>
       <h1>{DATA.users}</h1>
       
       </div>
     )
   }
   
   export default AsyncComponent;