import React from 'react';
import BounceLoader from 'halogen/BounceLoader';


class LoaderBounce extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
      
    let styles = {
        backgroundColor: this.props.backgroundColor || ''
    }
      
    return(

        <div style={this.props.style}>
          <BounceLoader 
            className="loaderBounce"
            color={this.props.color}
          />
        </div>

    )
  }

}

export default LoaderBounce;
