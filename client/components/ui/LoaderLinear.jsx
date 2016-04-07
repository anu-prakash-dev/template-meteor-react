import React from 'react';
import LinearProgress from 'material-ui/lib/linear-progress';


class LoaderLinear extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
      
    const styles = {
        backgroundColor: this.props.backgroundColor || ''
    }
      
    return(

        <LinearProgress 
          className="loaderLinear"
          mode="indeterminate"
          style={styles} 
          color={this.props.color} 
        />

    )
  }

}

export default LoaderLinear;
