import React from 'react';
import Child from "./child";

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collection: [{text: 'foo'}, {text: '22'}]
        };
    }

    addItem = () => {
        this.setState(prevState => ({
            collection: [...prevState.collection, {"text": "neeeew"}]
        }))
    };

    handleItemAdd = (item) => {
        this.setState(prevState => ({
            collection: [...prevState.collection, item]
        }))
    };


    render() {
        return (
            <div style={{background: '#ccc', padding: '2rem'}}>
                <p>Parent component</p>

                <Child items={this.state.collection} addItem={this.handleItemAdd}/>

                <div>
                    <button onClick={() => this.addItem()}>Add item</button>
                </div>

                <div>
                    <p>data in parent:</p>


                    {this.state.collection.map((item, index) => {
                        return (
                            <div key={index}> {item.text} </div>
                        );
                    })}


                </div>

            </div>
        )
    }
}

export default Parent;