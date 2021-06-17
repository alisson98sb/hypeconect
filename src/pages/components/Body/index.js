import React, { useEffect, useState } from 'react';
import './style.scss';

export default ()=> {
    const [produto, setProduto]    =  useState([])

    useEffect(()=>{
        fetch('http://localhost:3333/produtos')
          .then(response => response.json())
          .then(data => setProduto(data))
      },[])

    return(    
        <div class="row">
            {produto.map(()=>(
                <div class="col-sm-3">
                       <div className="card" >
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                </div>
            ))}

        </div>










        // <div className="body">
        //     <div className="cards">
        //         {produto.map(()=>(
        //             <div className="card" style={{width: "18rem"}}>
        //                 <img className="card-img-top" src="..." alt="Card image cap" />
        //                 <div className="card-body">
        //                     <h5 className="card-title">Card title</h5>
        //                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     <a href="#" className="btn btn-primary">Go somewhere</a>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    )
}