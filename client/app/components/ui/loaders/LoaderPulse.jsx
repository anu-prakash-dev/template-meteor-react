import React from 'react';
import PulseLoader from 'halogen/PulseLoader';


class LoaderPulse extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
      
    const styles = {
        backgroundColor: this.props.backgroundColor || ''
    }
      
    return(

        <div style={this.props.style}>
          <PulseLoader 
            className="loaderBounce"
            color={this.props.color}
          />
        </div>

    )
  }

}

export default LoaderPulse;
