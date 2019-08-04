import React from 'react';
import Todos from './component/todos'
import TodosItem from './component/todoItme'
import Footer from './component/footer'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: []
        }
    }
    addItem = (item) => {
        let newArr = [...this.state.arr]

            newArr.push(item)
        this.setState({
            arr: newArr
        })
    };
    removeOne=(index) => {
        let newArr = [...this.state.arr]
        newArr.splice(index, 1)
        this.setState({
            arr: newArr
        })
    };
    removeAll=()=> {
      this.setState({
          arr: []
      })
    };
    editItem=(item,index)=> {
        return new Promise((resolve, reject) =>{
            let newArr = [...this.state.arr];
            newArr[index] = item;
            this.setState({
                arr:newArr
            },()=>{
                resolve()
            })
        })

    }
    render() {
        const {arr} = this.state;
        return (
            <div>
                <Todos addItem={this.addItem}/>
                <ul className='todosItem'>{
                        arr.map((item, index) => {
                            if (item.text){
                                return  <TodosItem editItem={this.editItem} removeOne={this.removeOne}  item={item} key={index} index={index}/>
                            }else {
                                return null
                            }

                        })
                    }
                </ul>
                <Footer arr={arr} removeAll={this.removeAll}/>
            </div>
        )
    }
}
export default App
