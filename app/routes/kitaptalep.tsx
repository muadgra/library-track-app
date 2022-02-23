import { Outlet } from "remix";
import React from 'react';

import type {LinksFunction} from 'remix';
import stylesUrl from '../styles/index.css';
interface IProps{

}

interface IState{
    isim : string,
}

export default class KitapTalep<IProps, IState> extends React.Component{
    
    constructor(props : IProps) { 
        super(props);
        this.state = { isim : "Mert"}
    }

    render(){
        return(
            <div>
                <h1>Burasi Kitap Talep Sayfasi</h1>
                <main>
                    <Outlet/>
                </main>
            </div>
        )
    }
}

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
  };
  