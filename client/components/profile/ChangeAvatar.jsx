import React      from 'react';
import reactMixin from 'react-mixin';

import Avatar     from './Avatar';
import ButtonFlat from '../ui/ButtonFlat'
import {Colors}   from '../../app/Theme';

import IconButton from 'material-ui/lib/icon-button';
import IconUpload from 'material-ui/lib/svg-icons/file/cloud-download';
import IconDelete from 'material-ui/lib/svg-icons/action/delete';


class ChangeAvatar extends React.Component{

  constructor(props) {
    super(props);
    this.handleFile   = this.handleFile.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
    this.deleteAvatar = this.deleteAvatar.bind(this);
    this.chooseImage  = this.chooseImage.bind(this);
    this.closePreview = this.closePreview.bind(this);
    this.openPreview = this.openPreview.bind(this);
    this.state = {
      avatarLocalUri: '',
      previewImgClass: '',
      isButtonUpload: false,
      isPreview:false,
    };
  }  
  
  // Data
  
  getMeteorData() {
    return { 
      //avatar: Meteor.user().profile.avatar,
    }
  }

  changeAvatar(){
    Meteor.users.update(
      Meteor.userId(),
      {$set: {
         "profile.avatar": this.state.avatarLocalUri
        }
      }, 
      null,
      (error)=>{
        if(!error){
          this.closePreview();
          setTimeout(()=>{
            this.resetInput();
          }, 450)
        }
        else{
          console.log(error);
        }
      }
    );
  }

  deleteAvatar(){
    Meteor.users.update(
      Meteor.userId(),
      {$set: {
         "profile.avatar": ''
        }
      }, 
      null,
      (error)=>{
        if(!error){
          this.resetInput();
        }
        else{
          console.log(error);
        }
      }
    );
  }

  // Input[file]
  
  chooseImage(){
   this.refs['inputAvatar'].click();
  } 
   
  resetInput(){
    document.getElementById("inputAvatar").value='';
    this.setState({ avatarLocalUri: '' })
  }
 
  handleFile(e) {
    var reader = new FileReader();
    var file   = e.target.files[0];
    
    // if cancel image import (in natif modal)
    if(!file){return}
    
    // Size < 1.1mo
    var fileSize = ((file.size/1024)/1024).toFixed(4);
    if(fileSize > 1.1){
      console.log(fileSize);
      alert('Maximum size: 1MB');
      return;
    }
    
    // File to base64
    reader.onload = (upload) => {
      this.setState({
        avatarLocalUri: upload.target.result,
        previewImgClass: ' is-visible',
      });
    }
    reader.readAsDataURL(file);

    // Toggle preview
    this.openPreview();
    
  }

  // Preview
  
  openPreview(){
    this.setState({ isPreview: true });
  }
  
  closePreview(){
    this.setState({ isPreview: false});
  }
  
  // Render
  
  render() {
    
    const isPreview = this.state.isPreview;
    let toggleClass = isPreview ? ' is-visible' : '';
    
    return (

      <div id="ChangeAvatar">
        
        <div>
          
          {/* Current Avatar */}
          <div className={"currentAvatar"+toggleClass}>

            <Avatar 
              style   = {this.state.avatarLocalUri==''?{}:{opacity:0.3}}
            /> 

            <div id="avatarOptions">
              <IconButton 
                tooltipPosition="top-left"
                style={{marginTop:'-13px'}}
                onClick={this.chooseImage}
              >
                <IconUpload 
                  className="material-icons" 
                  color={Colors.greyMedium}
                  hoverColor={Colors.active}
                />
              </IconButton>
              <IconButton 
                touch   ={true} 
                style={{marginTop:'-15px'}}
                onClick={this.deleteAvatar}
              >
                <IconDelete 
                  className="material-icons" 
                  color={Colors.greyMedium}
                  hoverColor={Colors.active}
                  style={{fontSize:'6px'}}
                />
              </IconButton>
            </div>

          </div>


          {/* Preview Avatar */}
          <div className={"avatarPreview"+toggleClass}>
            <img className = {"avatar"+toggleClass}
                 src       = {this.state.avatarLocalUri}
                 onClick   = {this.chooseImage}
            />
          </div>

        </div>

        
        {/* Button Upload */}
        <div 
          id={"buttonUploadAvatar"}
          className={isPreview?"is-visible":""}>
          <ButtonFlat
            label="upload"
            backgroundColor={this.state.avatarLocalUri!=''?Colors.active:Colors.blueDark}
            onClick={this.changeAvatar}
            style={{marginTop: '20px'}}/>
        </div>
        
        
        {/* Hidden input */}
        <input 
          style={{display:'none'}}
          ref  = "inputAvatar"
          id   = "inputAvatar"
          type = "file" 
          accept = "image/gif,image/png, image/svg, image/jpg, image/jpeg"
          onChange={this.handleFile} required
        />
        
      </div>
      
    )
  }
  
};

reactMixin(ChangeAvatar.prototype, ReactMeteorData);
export default ChangeAvatar;
