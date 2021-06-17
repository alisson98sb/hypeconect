import React from 'react';
import './style.scss';

export default ({produto})=> {
    console.log(produto)
    return(
        <div className="Container">
            <div className="Header">
                <header class="d-flex justify-content-center py-3">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="#" class="Header--login nav-link active" aria-current="page">FAÇA LOIN <br/> OU CADASTRE-SE</a></li>
                        <li class="nav-item"><input type="search" class="form-control" placeholder="Search..." aria-label="Search"/></li>
                        <li class="nav-item"><a href="#" class="Header--atendimento nav-link"><br/> 21980968124</a></li>
                        <li class="nav-item"><a href="#" class="Header--sacola nav-link">MINHA SACOLA <br/> 02 | ITENS </a></li>
                    </ul>
                </header>
                <div className="Header--logo"></div>
                <div className="Header--aside-top">
                </div>
            </div>
        </div>
    )
}