import React from 'react';
import RingLoader from 'halogen/RingLoader';


class LoaderRing extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
      
    const styles = {
        backgroundColor: this.props.backgroundColor || ''
    }
      
    return(

        <div style={this.props.style}>
          <RingLoader 
            className="loaderBounce"
            color={this.props.color}
          />
        </div>

    )
  }

}

export default LoaderRing;
