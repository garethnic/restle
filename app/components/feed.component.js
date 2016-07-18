//Libraries
import React from 'react';

//Components
import Item from '../components/item.component';

class Feed extends React.Component {
    render () {
        return (
            <Item
                feedData={this.props.feedData}
            />
        );
    }
}

export default Feed;