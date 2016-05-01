import React      from 'react';

import Avatar     from './Avatar';

import {changeAvatar, deleteAvatar} from '/client/api/accounts'

import ButtonFlat from '/client/app/components/ui/ButtonFlat'
import {Colors}   from '/client/app/Theme';

import IconButton from 'material-ui/lib/icon-button';
import IconUpload from 'material-ui/lib/svg-icons/file/cloud-download';
import IconDelete from 'material-ui/lib/svg-icons/action/delete';

import Dialog       from 'material-ui/lib/dialog';
import FlatButton   from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';



class ChangeAvatar extends React.Component{

  constructor(props) {
    super(props);
    this.showAvatarOverlay = this.showAvatarOverlay.bind(this);
    this.hideAvatarOverlay = this.hideAvatarOverlay.bind(this);
    this.openDialog   = this.openDialog.bind(this);
    this.closeDialog  = this.closeDialog.bind(this);
    this.dialogCancel = this.dialogCancel.bind(this);
    this.handleFile   = this.handleFile.bind(this);
    this.chooseImage  = this.chooseImage.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
    this.deleteAvatar = this.deleteAvatar.bind(this);
    this.onChangeAvatarSuccess = this.onChangeAvatarSuccess.bind(this);
    this.onChangeAvatarError   = this.onChangeAvatarError.bind(this);
    this.onDeleteAvatarSuccess = this.onDeleteAvatarSuccess.bind(this);
    this.onDeleteAvatarError   = this.onDeleteAvatarError.bind(this);
    this.state = {
      avatarLocalUri: '',
      previewImgClass: '',
      isButtonUpload: false,
      isDialogOpen:false,
      isAvatarOverlay:false,
      isAvatarClone:false,
      dialogContentStyle: {maxWidth: '18em'}
    };
  }  
  
  changeAvatar(){
    changeAvatar(
      this.state.avatarLocalUri,
      (error)=>{
        if(!error){
          this.onChangeAvatarSuccess();
        }
        else{
          this.onChangeAvatarError(error);
        }
      }
    );
  }

  deleteAvatar(){
    deleteAvatar( (error)=>{
      if(!error){
        this.onDeleteAvatarSuccess();
      }
      else{
        this.onDeleteAvatarError(error);
      }
    });
  }

  onChangeAvatarSuccess(){
    
    this.setState({ isAvatarClone: false });
    
    setTimeout(()=>{
      this.hideAvatarOverlay();
      this.closeDialog();
      this.resetInput();
    }, 450)
  }
  
  onChangeAvatarError(){
    this.resetInput();
  }
  
  onDeleteAvatarSuccess(){
    this.resetInput();
  }
  
  onDeleteAvatarError(){}
  

  // Avatar Overlay
  
  showAvatarOverlay(){
    this.setState({ isAvatarOverlay: true });
  }  
  
  hideAvatarOverlay(){
    this.setState({ isAvatarOverlay: false });
  }

  
  // Dialog (update avatar)
  
  openDialog() {
    this.setState({
      isDialogOpen: true,
      isAvatarClone: true
    });
  }

  closeDialog() {
    this.setState({isDialogOpen: false});
  }

  dialogCancel(){
    this.resetInput();
    this.hideAvatarOverlay();
    this.closeDialog();
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
    //this.openPreview();
    this.openDialog();
    
  }

  
  
  
  render() {
    
    // Dynamic classes
    
    const isAvatarOverlay = this.state.isAvatarOverlay;
    const isAvatarClone   = this.state.isAvatarClone;
    let dynamicClass      = isAvatarOverlay ? ' is-visible' : '';
    let avatarCloneClass  = isAvatarClone ? ' is-visible' : '';
    
        
    // Dialog action buttons
    
    const dialogActions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.dialogCancel}
        style={{color:Colors.textPrimary}}
      />,
      <FlatButton
        label="Update"
        keyboardFocused={true}
        onTouchTap={this.changeAvatar}
        style={{color:Colors.tertiary}}
      />,
    ];

    
    return (

      <div id="ChangeAvatar">
        
        <div>
          
          {/* Current Avatar */}
          <div className={"currentAvatar"+dynamicClass}>

            <Avatar/> 

          
            <div id="avatarOverlay" className={dynamicClass}>
              <IconButton 
                tooltipPosition="top-left"
                onClick={this.chooseImage}
              >
                <IconUpload 
                  className="material-icons uploadButton" 
                  color={Colors.primary}
                  hoverColor={Colors.tertiary}
                />
              </IconButton>
            </div>

          </div>
          
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


        <Dialog
          title   = 'Change your avatar'
          className = 'dialogAvatar'
          actions = {dialogActions}
          modal   = {true}
          open    = {this.state.isDialogOpen}
          onRequestClose = {this.closeDialog}
          contentStyle={this.state.dialogContentStyle}
          titleStyle = {this.state.titleStyle}
          bodyStyle  = {this.state.bodyStyle}
          actionsContainerStyle  = {this.state.actionContainerStyle}
        >
          <div className="currentAvatarInModal">
            <Avatar className={avatarCloneClass} /> 
            {/* Clone Avatar (preview) */}
            <div className={"avatarPreview"+avatarCloneClass}>
              <img className = {"avatarClone"}
                   src       = {this.state.avatarLocalUri}
                   onClick   = {this.chooseImage}
              />
            </div>
          </div> 
        </Dialog>

        
      </div>
      
    )
  }
  
};

export default ChangeAvatar;

/*


              <IconButton 
                touch   ={true} 
                style={{marginTop:'-15px'}}
                onClick={this.deleteAvatar}
              >
                <IconDelete 
                  className="material-icons" 
                  color={Colors.textSecondary}
                  hoverColor={Colors.tertiary}
                />
              </IconButton>
              
*/