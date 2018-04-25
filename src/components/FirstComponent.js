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
    }
    handleSubmit (user, say) {
        let comments = this.state.list
        comments.push({
            title: user,
            text: say
        })
        this.setState({
            list: comments
        })
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
                <FormComponent onCommentSubmit={this.handleSubmit.bind(this)}></FormComponent>
            </div>
        )
    }
};

export default FirstComponent;
