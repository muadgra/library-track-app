import React from "react";
import { IArgsTextInput } from "../types/args";

interface IProps{
    label: string,
    name: string,
    value: string,
    onChange(args: IArgsTextInput): void,

}
interface IState{

}

export class TextInput extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);

    }

    _onChange(event: React.ChangeEvent<HTMLInputElement>): void{
        if( this.props.onChange){
            this.props.onChange({name: this.props.name, value: event.target.value});
        }
    }

    render(){
        return(
            <label>{this.props.label}
                <input type="text" value={this.props.value} name={this.props.name} onChange={(event) => this._onChange(event)}/>
            </label>
        )
    }
}