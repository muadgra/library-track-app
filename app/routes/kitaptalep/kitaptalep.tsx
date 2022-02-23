import { Outlet } from "remix";
import React from 'react';
interface IProps{

}

interface IState{
    kitapIsim : string,
    kitapTur: string,
    kitapContent?: string,
    kitapAltTur?: string
}

export default class KitapTalep<IProps, IState> extends React.Component{
    
    constructor(props : IProps) { 
        super(props);
        this.state = {kitapIsim : "", kitapTur: "", kitapContent : "", kitapAltTur: ""};
        
        this.changeType = this.changeType.bind(this);
    }

    //setstate?
    onChange(event: React.FormEvent<HTMLInputElement>) : void{
        
    }
    changeType(event : React.ChangeEvent<HTMLSelectElement>) : void{
        this.setState({kitapTur : event.target.value});
        if(this.state.kitapTur == ""){
            this.state.kitapAltTur = "";
            console.log("----")
            console.log("kitap alt tur bos")
            console.log("----")
        }
        console.log(this.state.kitapTur);
    }
    //useEffect vs componentDidMount / componentWillMount
    //promise mi dönecek?
    handleSubmit(event: React.FormEvent<HTMLInputElement>) : void{

    }
    render(){
        return(
            
            <div>
                <p>Add your book request.</p>
                
                <form method="post">
                <div>
                    <div>
                        <label>
                            Name of the book: <input type="text" name="name" 
                                                value = {this.state.kitapIsim}
                                                onChange={this.onChange} required/>
                        </label>
                        </div>
                    <div>
                        <label>
                            Type: 
                            <select name="type" id="type" onChange={this.changeType} required>
                                <option value="">None</option>
                                 <option value="scifi">Sci-Fi</option> 
                                 <option value="thriller">Thriller</option>
                                 <option value="fantastic">Fantastic</option>
                            </select>
                        </label>
                        <div>
                        {this.state.kitapTur && 
                            <select name="subType" onChange={this.changeType}>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        }
                        </div>
                    </div>
                    <div>
                        <label>
                            What is this book about? <br/> <textarea name="content" rows={5} cols={30}/>
                        </label>
                    </div>
                    <div>
                        
                    </div>

                    <div>
                        <button type="submit" className="button">
                            Add
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}