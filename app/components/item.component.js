//Libraries
import React from 'react';

class Item extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            feed: null
        }
    }

    componentWillReceiveProps (feedData) {
        this.setState({ feed: feedData });
    }

    render () {
        let item = '';

        if (this.state.feed) {
            let items = this.state.feed.feedData;
            console.log(items.entries);
            if (items.entries.length > 0) {
                item = items.entries.map((item, index) => {
                   return  <li className="list-group-item" key={index}><div className="media-body">{item.title}</div></li>
                });
            } else {
                return <div></div>
            }
        }

        return (
            <ul className="list-group">
                {item}
            </ul>
        );
    }
}

export default Item;