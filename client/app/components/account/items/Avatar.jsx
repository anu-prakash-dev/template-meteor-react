import {Meteor}   from 'meteor/meteor';
import React      from 'react';
import reactMixin from 'react-mixin';

const defaultAvatar = '/medias/default-avatar.svg';

/* 3 possibilities
      1) Not logged                      : "avatarDisconnected"
      2) Logged in, with avatar = ''     : "avatarDefault"
      2) Logged in, with avatar = base64 : "avatar"
*/



class Avatar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }  
  
  getMeteorData() {
    return { 
      user:   Meteor.user(),
      avatar: Meteor.user()?Meteor.user().profile.avatar:false,
    }
  }  
  
  render() {
    
    let isUser          = this.data.user;
    let isDefaultAvatar = (this.data.avatar == '');
    
    return (
      
      <div>
        { isUser ?
          <div> 
            { isDefaultAvatar ?
              <div 
                className={"avatar avatarDefault " + this.props.className}
                onClick={this.props.onClick}
                style = {this.props.style}>
                {Meteor.user().username.substring(0, 1)}
              </div>
              :
              <img 
                className={"avatar " + this.props.className}
                id    = {this.props.id}
                src   = {this.data.avatar||defaultAvatar}
                style = {this.props.style}
                onClick={this.props.onClick}
              />
            }
          </div>
          :
          <img 
            className={"avatar avatarDisconnected " + this.props.className}
            src   = {defaultAvatar}
            style = {this.props.style}
            onClick={this.props.onClick}
          />
        }
      </div>   
    )
  }
  
};

reactMixin(Avatar.prototype, ReactMeteorData);
export default Avatar;


