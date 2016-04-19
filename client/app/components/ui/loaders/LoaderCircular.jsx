import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';


class LoaderCircular extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
      
    const styles = {
        backgroundColor: this.props.backgroundColor || ''
    }
      
    return(
        
        <CircularProgress 
          className="loaderCircular"
          style= {this.props.style} 
          color= {this.props.color} 
          size = {0.45}
        />

    )
  }

}

export default LoaderCircular;
