import { Outlet } from "remix";
import React from 'react';
interface IProps{
}

interface IState{
    isim : string,
}

export default class KitapTalep<IProps, IState> extends React.Component{
    
    constructor(props : IProps, state : IState) { 
        super(props);

    }

    render(){
        return(
            <div>
                <h1>Burasi kitap talep sayfasidir. </h1>
                
            </div>
        )
    }
}
