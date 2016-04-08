              
var React     = require('react');
var TextField = require('material-ui/lib/text-field');

import {Colors} from '../../app/Theme';


class InputFloatingLabel extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      styles:{
        style:this.props.style,
        hintStyle:{
          color: Colors.blueMedium1,
        },
        floatingLabelStyle:{
          pointerEvents: 'none', // fix : first click on labelText doesn't work
          color: Colors.blueMedium1,
        },
        inputStyle:{
          color: Colors.greyLight,
        },
        underlineStyle:{
          borderColor: Colors.blueMedium1,
        },
        underlineFocusStyle:{
          borderColor: Colors.greyLight,
        },
        underlineDisabledStyle:{
        },
        errorStyle:{
          color: Colors.active,
        }
      }
    }
  }
  
  render() { 
    return (

        <div className="inputFloatingLabel">

          <TextField
              name     = {this.props.name}
              type     = {this.props.type}
              hintText = {this.props.placeholder} 
              floatingLabelText = {this.props.floatingLabel}          
              errorText= {this.props.errorText}         
              value    = {this.props.value}
              onChange = {this.props.onChange}
              // Multiline (textarea)
              multiLine= {this.props.multiline||false}
              rows     = {1}
              rowsMax  = {5} 
              //Events
              onEnterKeyDown        = {this.props.onEnterKeyDown}
              onFocus               = {this.props.onFocus}
              //Styles
              style                 = {this.state.styles.style}
              hintStyle             = {this.state.styles.hintStyle}
              floatingLabelStyle    = {this.state.styles.floatingLabelStyle}
              inputStyle            = {this.state.styles.inputStyle}
              underlineStyle        = {this.state.styles.underlineStyle}
              underlineFocusStyle   = {this.state.styles.underlineFocusStyle}
              underlineDisabledStyle= {this.state.styles.underlineDisabledStyle}
              errorStyle            = {this.state.styles.errorStyle}
          /> 

        </div>

    )
  }
  
};

export default InputFloatingLabel;
              