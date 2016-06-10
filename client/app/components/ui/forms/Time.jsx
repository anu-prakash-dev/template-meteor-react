import React          from 'react';
import TimePicker     from 'material-ui/TimePicker';

class Time extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (  
      
       <TimePicker
            name={this.props.name}
            format="ampm"
            hintText={this.props.hintText}
            value={this.props.value}
            onChange={this.props.onChange}/>
      
    );
  }
}

export default Time;