import { Outlet } from "remix";
import React from 'react';
import { BookInformation } from "./BookInformation/BookInformation";
import { TextInput } from "./components/TextInput";
import { IArgsTextInput } from "./types/args";
interface IProps {

}

interface IState {
    current: BookInformation,
}

export default class KitapTalep extends React.Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);
        this.state = {current : {kitapIsim: "", kitapTur: ""}}

    }

    onTextChange(args: IArgsTextInput): void{
        
        const {current} = this.state;
        current![args.name as keyof BookInformation] = args.value;
        this.setState({current});
        console.log(current);
        
    }

    render() {
        return (

            <div>
                <p>Add your book request.</p>
                <form method="post">
                    <TextInput label="Kitap Adı: " name="kitapIsim"
                    value={this.state.current.kitapIsim} onChange={this.onTextChange.bind(this)} />
                </form>
            </div>
        )
    }
}