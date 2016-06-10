import React, { Component, PropTypes }  from 'react';
import { createContainer }              from 'meteor/react-meteor-data';
import { List, ListItem }               from 'material-ui/List';
import Subheader                        from 'material-ui/Subheader';
import RaisedButton                     from '/client/app/components/ui/buttons/RaisedButton.jsx';
import DialogSimple                     from '/client/app/components/ui/dialogs/DialogSimple.jsx';
import TextField                        from '/client/app/components/ui/forms/TextField.jsx';

class ListUi extends React.Component{

  constructor(props){
    super(props);
    this.renderList       = this.renderList.bind(this);
    this.deleteThisItem   = this.deleteThisItem.bind(this);
    this.editThisItem     = this.editThisItem.bind(this);
    this.handleOpen       = this.handleOpen.bind(this);
    this.handleClose      = this.handleClose.bind(this);

    this.state={
      open: false,
      nameEmployee: ''
    }
  }

  renderList() {

    return this.props.items.map((item, i) => (
        <ListItem key={i} primaryText={item.name}>
          <RaisedButton
              label="Modifier"
              onClick={this.handleOpen}/>
          <RaisedButton
              label="Supprimer"
              onClick={this.deleteThisItem.bind(this, item._id)}/>

          <DialogSimple
              modal           = {false}
              open            = {this.state.open}
              title           = {"Modifier"}
              onRequestClose  = {this.handleClose}>

              <TextField
                  name              = "nameEmployee"
                  floatingLabelText = "Nom de l'employé"
                  value             = {this.state.nameEmployee}
                  onChange          = {this.handleChange}/>

          </DialogSimple>

        </ListItem>
    ));
  }

  handleOpen() {
    this.setState({open: true});
  }

    handleClose() {
      this.setState({open: false});
    }


    deleteThisItem(itemId, event) {
      let callMeteor = "remove" + this.props.form;
      Meteor.call(callMeteor, itemId);
      console.log("supprimé !");
    }

    editThisItem(itemId, event){
      let callMeteor = "edit" + this.props.form;
      Meteor.call(callMeteor, itemId, "hello");
      console.log("modifié !");
    }

  render() {
    return (
      <List>
        <Subheader>{this.props.nameList}</Subheader>
        {this.renderList()}
      </List>
    );
  }

};

export default ListUi;
