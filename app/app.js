//React libraries
import React from 'react';
import ReactDom from 'react-dom';

//Import container app
import AppContainer from './containers/app.container';

class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

//Render to index.html
ReactDom.render(
    <App />,
    document.getElementById('content')
);