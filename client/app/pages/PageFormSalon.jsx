import { Meteor }   from 'meteor/meteor';
import reactMixin   from 'react-mixin';
import React        from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Salons }     from '/lib/collections/salons.js';

import RaisedButton   from '/client/app/components/ui/buttons/RaisedButton.jsx'
import FloatingButton from '/client/app/components/ui/buttons/FloatingButton.jsx'
import TextField      from '/client/app/components/ui/forms/TextField.jsx'
import ListUi         from '/client/app/components/ui/lists/ListUi.jsx'
import {Colors}       from '/client/app/Theme';




class PageFormSalon extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange     = this.handleChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);

    this.state={
      name:'',
      form:'Salon'
    }
  }

  handleChange(event){
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    Meteor.call("addSalon", this.state.name.trim());
    console.log("ajouté !");

    // Clear form
    this.setState({ name: '' });
  }

  getMeteorData() {
    let query = {};

    return {
      salons: Salons.find(query, {sort: {createdAt: -1}}).fetch(),
      currentUser: Meteor.user()
    }
  }

  componentWillMount() {
    Meteor.subscribe("salons");
  }

  render() {

    return (

      <div className="Page PageFormSalon">

        <TextField
            name="salonInput"
            floatingLabelText="Nom du Salon"
            value={this.state.name}
            onChange={this.handleChange}/>

        <RaisedButton
            label="Ajouter"
            onClick={this.handleSubmit}/>

        <ListUi
            nameList="Liste des Salons"
            items={this.data.salons}
            form={this.state.form}/>

      </div>

    );
  }

};

reactMixin(PageFormSalon.prototype, ReactMeteorData);

export default PageFormSalon;
