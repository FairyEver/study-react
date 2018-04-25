import React from 'react';

import ListItem from './ListItem';
import FormComponent from './FormComponent';

class FirstComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [
                {
                    title: 'very good',
                    text: 'this is a very good component'
                }, {
                    title: 'very good 2',
                    text: 'this is a very good component 2'
                }
            ]
        };
        setTimeout(() => {
            this.refreshData()
        }, 3000);
    }
    refreshData () {
        this.setState({
            list: [
                {
                    title: 'very good 3',
                    text: 'this is a very good component 3'
                }
            ]
        });
    }
    render () {
        return (
            <div>
                {this.state.list.map((item, index) => {
                    return (
                        <ListItem key={index} title={item.title}>
                            {item.text}
                        </ListItem>
                    )
                })}
                <FormComponent></FormComponent>
            </div>
        )
    }
};

export default FirstComponent;
