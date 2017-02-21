import React, { Component } from 'react';
import { connect } from 'react-redux';

class stocks extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderStocks()}
        </ul>
      </div>
    );
  }

  renderStocks() {
    return this.props.stocks.map(stock => {
      return (
        <li key={stock.id} className="list-group-item">
          {stock.name}
        </li>
      )
    });
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  }
}

export default connect(mapStateToProps)(stocks) ;
