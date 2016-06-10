import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import RaisedButton   from '/client/app/components/ui/buttons/RaisedButton.jsx';

class SelectableList extends React.Component {

  constructor(props) {
    super(props);
    this.deleteThisItem   = this.deleteThisItem.bind(this);
    this.openThisItem     = this.openThisItem.bind(this);
    this.editThisItem     = this.editThisItem.bind(this);
    this.getSalonName     = this.getSalonName.bind(this);

    this.state={
      salonName:'',
    }
  }

  renderList(){
    return this.props.items1.map((item, i) => (
        <ListItem
          key={i}
          primaryText={item.name}
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          onClick={this.getSalonName.bind(this, item.salon)}
          nestedItems={[
            <ListItem
              primaryText={this.state.salonName}/>,
            <RaisedButton
                label="Voir les horaires"
                onClick={this.openThisItem.bind(this, item._id)}/>,
            <RaisedButton
              label="Modifier"
              onClick={this.editThisItem.bind(this, item._id)}/>,
            <RaisedButton
              label="Supprimer"
              onClick={this.deleteThisItem.bind(this, item._id)}/>
          ]}
        />
    ));
  }

  editThisItem(itemId, event) {
    let callMeteor = "edit" + this.props.form;
    Meteor.call(callMeteor, itemId, "hello");
  }

  deleteThisItem(itemId, event) {
    let callMeteor = "remove" + this.props.form;
    Meteor.call(callMeteor, itemId);
    console.log("supprimé !");
  }

  openThisItem(itemId, event) {
    console.log("open");
  }

  getSalonName(itemId) {
    this.props.items2.map((item, i) => {
      if( item._id === itemId){
        this.setState({
            salonName: item.name
        });
      }
    });
  }

  render() {
    return (
      <List>
        <Subheader>{this.props.nameList}</Subheader>
        {this.renderList()}
      </List>

    );
  }
}

export default SelectableList;
