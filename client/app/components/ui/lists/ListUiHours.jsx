import React, { Component, PropTypes }  from 'react';
import { createContainer }              from 'meteor/react-meteor-data';
import { List, ListItem }               from 'material-ui/List';
import Subheader                        from 'material-ui/Subheader';
import RaisedButton                     from '/client/app/components/ui/buttons/RaisedButton.jsx';
import DialogSimple                     from '/client/app/components/ui/dialogs/DialogSimple.jsx';
import TextField                        from '/client/app/components/ui/forms/TextField.jsx';

class ListUiHours extends React.Component{

  constructor(props){
    super(props);
    this.renderList       = this.renderList.bind(this);
    this.deleteThisItem   = this.deleteThisItem.bind(this);
    // this.editThisItem     = this.editThisItem.bind(this);
    this.handleOpen       = this.handleOpen.bind(this);
    // this.handleClose      = this.handleClose.bind(this);

    this.state={
      open: false,
      nameEmployee: ''
    }
  }

  renderList() {
    return this.props.items.map((item, i) => (
        <ListItem key={i} primaryText={item.morningstart}>
          <RaisedButton
              label="Modifier"
              onClick={this.handleOpen}/>
          <RaisedButton
              label="Supprimer"
              onClick={this.deleteThisItem.bind(this, item._id)}/>
        </ListItem>
    ));
  }


  deleteThisItem(itemId, event) {
    let callMeteor = "remove" + this.props.form;
    Meteor.call(callMeteor, itemId);
    console.log("supprimé !");
  }

  handleOpen() {
    this.setState({open: true});
  }

    // editThisItem(itemId, event){
    //   let callMeteor = "edit" + this.props.form;
    //   Meteor.call(callMeteor, itemId, "hello");
    //   console.log("modifié !");
    // }

  render() {
    return (
      <List>
        <Subheader>{this.props.nameList}</Subheader>
        {this.renderList()}
      </List>
    );
  }

};

export default ListUiHours;
