//Libraries
import slug from 'slug';
import React from 'react';
import PouchDB from 'pouchdb';
import parser from 'rss-parser';
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

        parser.parseURL(feed, (err, parsed) => {
            if (!err) {
                _this.setState({ feedData: parsed.feed });

                let feedTitle = parsed.feed.title;
                /*let doc = {
                    '_id': Math.floor((Math.random() * 100) + 1).toString() + slug(feedTitle),
                    'title': feedTitle,
                    'feed': feed
                }

                db.put(doc);*/
            } else {
                console.log('whoops');
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