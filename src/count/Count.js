import React from 'react';

import {useSelector,useDispatch} from 'react-redux'
import { decrease, decreaseby5, increase, increaseby5, reset } from '../Counter/CounterSlice';


const Count = () => {


    const res=useSelector((s)=>s)
    const dispatch=useDispatch()
    return (
        <div><h1>  here comes the count : {res.counter.count}</h1>
          
            <button onClick={()=>dispatch(increase())}>Increse</button>
            <button onClick={()=>dispatch(decrease())}>decrease</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
            <button onClick={()=>dispatch(increaseby5(5))}>increase by 5</button>
            <button onClick={()=>dispatch(decreaseby5(5))}>decrease by 5</button>
        </div>
    );
};

export default Count;