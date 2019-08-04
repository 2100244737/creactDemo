import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleClear=()=> {
        this.props.removeAll()
    }
    render() {
        let arr = this.props.arr
        let num = 0
        arr.map(item => {
            if(item.text){
                num ++
            }
            return num
        })
        return (
            <div>
               <span>剩余{num}项</span>
                <button onClick={this.handleClear}>clear all</button>
            </div>
        )
    }
}
export default Footer