//Libraries
import React from 'react'

class Menu extends React.Component {
    render () {
        return (
          <form onSubmit={this.props.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control"
                       value={this.props.feedValue}
                       onChange={this.props.handleChange}
                       placeholder="Feed"
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-large btn-primary" value="Add" />
              </div>
          </form>
        );
    }
}

export default Menu;