import { Outlet } from "remix";
import React from 'react';
interface IProps{

}

interface IState{
    isim : string,
}

export default class Kutuphane<IProps, IState> extends React.Component{
    
    constructor(props : IProps) { 
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Burasi Kutuphanecinin Sayfasi </h1>
                
            </div>
        )
    }
}