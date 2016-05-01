import React     from 'react';
import TextField from 'material-ui/TextField';

import {Colors}  from '/client/app/Theme';


class InputFloatingLabel extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      styles:{
        style:this.props.style,
        hintStyle:{
          color: Colors.secondary,
        },
        floatingLabelStyle:{
          pointerEvents: 'none', // fix : first click on labelText doesn't work
          color: this.props.floatingLabelColor || Colors.secondary,
        },
        inputStyle:{
          color: this.props.inputColor || Colors.secondary,
        },
        underlineStyle:{
          borderColor: this.props.underlineColor || Colors.secondary,
        },
        underlineFocusStyle:{
          borderColor: this.props.underlineFocusColor || Colors.tertiary,
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
              onKeyDown = {this.props.onEnterKeyDown}
              onFocus   = {this.props.onFocus}
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
              