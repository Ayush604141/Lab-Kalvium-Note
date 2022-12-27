import { Component } from "react";
import './Editor.css'
class TextEditor extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        }
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
    render(){
        return(
            <div className="container">
                <div className="textField">
                    <h1>Input</h1>
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="proNote">
                    {this.state.value}
                </div>
            </div>
        )
    }
}


export default TextEditor