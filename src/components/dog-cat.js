import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreatorsCatDog } from '../state/index';
import '../App.css'
function DogCat() {
 const dispatch = useDispatch();
 const{cat,dog}=bindActionCreators(actionCreatorsCatDog,dispatch);
 const stateAnimal = useSelector((state)=>state.catdog);
  return (
    <div className='dogcat'>
    <button className='dog' onClick={()=>dog("DOG")}>DOG</button>
    <button className='cat' onClick={()=>cat("CAT")}>CAT</button>
    <h1>{stateAnimal}</h1>
    </div>
  )
}

export default DogCat;