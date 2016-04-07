var React = require('react');

module.exports = React.createClass({

    render: function() {
        if (this.props.condition) {
            return this.props.children;
        }
        else {
            return false;
        }
    }
})