import React      from 'react';



class BasicInfo extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }  

  render() {
    return (
      <div id="BasicInfo">
        
        
        <p id="textUsername"> {this.props.username} </p>

        { this.props.email ?
            <p id="textEmail">{this.props.email}</p> 
          :
            ''
        }
        
        { this.props.isEmailVerified ?
            <p id="textEmailStatut"> (verified) </p>
          :
            <p id="textEmailStatut"> (not verified) </p>
        }
                
      </div>
    )
  }
  

};


export default BasicInfo;