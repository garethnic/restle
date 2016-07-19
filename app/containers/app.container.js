//Libraries
import slug from 'slug';
import React from 'react';
import XML from 'pixl-xml';
import PouchDB from 'pouchdb';
import request from 'superagent';

//Components
import Menu from '../components/menu.component';
import Feed from '../components/feed.component';

let db;

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: '',
            feedData: []
        }

        db = new PouchDB('restle');
    }

    handleSubmit (e) {
        e.preventDefault();

        let feed = this.state.feed;
        let _this = this;

        request
            .get(this.state.feed)
            .end(function (err, res) {
               if (err) {
                   alert('Invalid feed URL!');
               }

               if (res.status === 200) {
                   let feedData = XML.parse(res.text);
                   let feedTitle = feedData.channel.title;

                   let doc = {
                       '_id': Math.floor((Math.random() * 100) + 1).toString() + slug(feedTitle),
                       'title': feedTitle,
                       'feed': feed
                   }

                   _this.setState({ feedData: feedData });
                   //db.put(doc);
               }
            });
    }

    handleChange (e) {
        this.setState({ feed: e.target.value });
    }

    render () {
        return (
            <div>
                <div className="window">
                    <div className="window-content">
                        <div className="pane-group">
                            <div className="pane-sm sidebar">
                                <Menu
                                    handleSubmit={this.handleSubmit.bind(this)}
                                    handleChange={this.handleChange.bind(this)}
                                    feedValue={this.state.feed}
                                />
                            </div>
                            <div className="pane">
                                <Feed
                                    feedData={this.state.feedData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppContainer;