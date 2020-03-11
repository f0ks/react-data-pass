import React from 'react';

class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    addItemFromChild = () => {
        this.props.addItem({'text': 'added from child'})
    };


    render() {
        return (
            <div style={{background: '#eee', padding: '2rem'}}>
                <p>Child component</p>

                {this.props.items.map((item, index) => {
                    return (
                        <div key={index}> {item.text} </div>
                    );
                })}

                <button onClick={() => this.addItemFromChild()}>add item from child</button>

            </div>
        )
    }
}

export default Child;