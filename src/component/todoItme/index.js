import React from 'react';
import './index.scss'
class todoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            isShow: false,
            isEdit: false
        }
    }
    handleChange=(e)=> {
       let value = e.target.type==='checkbox'? e.target.checked: this.state.isShow
            this.setState({
                isShow: value
            })

    }
    doubleClick= ()=>{
        this.setState({
            ...this.state,
            isEdit: true
        },()=> {
            this.refs.editor.focus();
            this.refs.editor.value = this.props.item.text
        })
    }
    inputChange=(e)=> {

        let {editItem,index} = this.props;
        let item ={
            ...this.props.item,
            text: e.target.value
        }
        console.log(item);
        editItem(item,index)
    }
    handleBlur= () => {
        this.setState({
            ...this.state,
            isEdit: false
        })
    }
    render() {
        const {item, index}=this.props;
        if (!this.state.isEdit) {
            return (
                <div className='containers'>
                    <input type="checkbox"  onChange={this.handleChange} />
                    <span className={this.state.isShow? 'active':''} onDoubleClick={this.doubleClick}>{item.text}</span>
                    <button onClick={()=> {
                        this.props.removeOne(index)
                    }}>删除</button>
                </div>
            )
        }else {
            return(
                <div className='Edit'>
                    <input type="text" ref='editor' onBlur={this.handleBlur} onChange={this.inputChange}/>
                </div>
            )
        }

    }
}
export default todoItem