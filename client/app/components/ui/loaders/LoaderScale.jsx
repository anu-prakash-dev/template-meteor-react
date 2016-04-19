import React from 'react';
import ScaleLoader from 'halogen/ScaleLoader';


class LoaderScale extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
      
    const styles = {
        backgroundColor: this.props.backgroundColor || ''
    }
      
    return(

        <div style={this.props.style}>
          <ScaleLoader 
            className="loaderBounce"
            color={this.props.color}
          />
        </div>

    )
  }

}

export default LoaderScale;
