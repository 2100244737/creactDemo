import React from 'react';
import './index.scss'

class todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    handleSubmit = (e) => {
       const value = e.target.value;
       this.setState({
           text: value
       })
    }
    addhandle = (e) => {
         if (e.keyCode === 13){
           let item = {
               text: this.state.text
           }

               this.props.addItem(item)
               this.setState({
                   text: ''
               })

         }
    }
    render() {
        const {text} = this.state
        return (
            <div className='container'>
                <h1 className="title">todos</h1>
                <input className='input' value={text} type="text" placeholder='add a todos' onKeyDown={this.addhandle}   onChange={this.handleSubmit}/>
            </div>
        )
    }
}

export default todos