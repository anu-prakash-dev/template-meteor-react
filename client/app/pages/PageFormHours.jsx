import { Meteor }   from 'meteor/meteor';
import reactMixin   from 'react-mixin';
import React        from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Hours }      from '/lib/collections/hours.js';
import RaisedButton   from '/client/app/components/ui/buttons/RaisedButton.jsx'
import FloatingButton from '/client/app/components/ui/buttons/FloatingButton.jsx'
import TextField      from '/client/app/components/ui/forms/TextField.jsx'
import Time           from '/client/app/components/ui/forms/Time.jsx'
import ListUiHours    from '/client/app/components/ui/lists/ListUiHours.jsx'
import {Colors}       from '/client/app/Theme';




class PageFormHours extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeStartMorning   = this.handleChangeStartMorning.bind(this);
    this.handleChangeEndMorning     = this.handleChangeEndMorning.bind(this);
    this.handleChangeStartAfternoon = this.handleChangeStartAfternoon.bind(this);
    this.handleChangeEndAfternoon   = this.handleChangeEndAfternoon.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);

    this.state={
      form:'Hours',
      startHourMorning:{},
      endHourMorning:{},
      startHourAfternoon:{},
      endHourAfternoon:{}
    }
  }



//TODO factorisze
  handleChangeStartMorning(event, obj){
    this.setState({startHourMorning: obj});
  }
  handleChangeEndMorning(event, obj){
    this.setState({endHourMorning: obj});
  }
  handleChangeStartAfternoon(event, obj){
    this.setState({startHourAfternoon: obj});
  }
  handleChangeEndAfternoon(event, obj){
    this.setState({endHourAfternoon: obj});
  }

  handleSubmit(event) {
    event.preventDefault();


    Meteor.call("addHours",
                this.state.startHourMorning,
                this.state.endHourMorning,
                this.state.startHourAfternoon,
                this.state.endHourAfternoon);

    console.log("ajouté !");

    // Clear form
    this.setState({ startHourMorning: {}, endHourMorning:{}, startHourAfternoon: {}, endHourAfternoon:{} });
  }

  getMeteorData() {
    let query = {};

    return {
      hours: Hours.find(query, {sort: {createdAt: -1}}).fetch(),
      currentUser: Meteor.user()
    }
  }

  componentWillMount() {
    Meteor.subscribe("hours");
  }

  render() {

    return (

      <div className="Page PageFormHours">

        <h1>Journée type</h1>

        <h3>Matinée type</h3>
        <Time
             name="startHourMorning"
             format="ampm"
             hintText="Heure de début"
             value={this.state.startHourMorning}
             onChange={this.handleChangeStartMorning}/>
        <Time
             name="endHourMorning"
             format="ampm"
             hintText="Heure de fin"
             value={this.state.endHourMorning}
             onChange={this.handleChangeEndMorning}/>


        <h3>Après-midi type</h3>
        <Time
            name="startHourAfternoon"
            format="ampm"
            hintText="Heure de début"
            value={this.state.startHourAfternoon}
            onChange={this.handleChangeStartAfternoon}/>
        <Time
            name="endHourAfternoon"
            format="ampm"
            hintText="Heure de fin"
            value={this.state.endHourAfternoon}
            onChange={this.handleChangeEndAfternoon}/>

        <RaisedButton
            label="Ajouter"
            onClick={this.handleSubmit}/>

        <ListUiHours
            nameList="Liste des Horaires types"
            items={this.data.hours}
            form={this.state.form}/>

      </div>

    );
  }

};

reactMixin(PageFormHours.prototype, ReactMeteorData);

export default PageFormHours;
