import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './styles/global.scss';

export default ({produto})=>{
    return(
        <>
            <Header produto={produto}/>
            <Body produto={produto}/>
        </>
    )
}