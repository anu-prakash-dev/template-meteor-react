import React from 'react';
import MoonLoader from 'halogen/MoonLoader';


class LoaderMoon extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
      
    const styles = {
        backgroundColor: this.props.backgroundColor || ''
    }
      
    return(

        <div style={this.props.style}>
          <MoonLoader 
            className="loaderBounce"
            color={this.props.color}
          />
        </div>

    )
  }

}

export default LoaderMoon;
