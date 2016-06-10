import { Meteor }   from 'meteor/meteor';
import reactMixin   from 'react-mixin';
import React        from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Employees } from '/lib/collections/employees.js';
import { Salons }    from '/lib/collections/salons.js';


import RaisedButton   from '/client/app/components/ui/buttons/RaisedButton.jsx'
import TextField      from '/client/app/components/ui/forms/TextField.jsx'
import CheckboxField  from '/client/app/components/ui/forms/CheckboxField.jsx'
import Select         from '/client/app/components/ui/forms/Select.jsx'
import ListUi         from '/client/app/components/ui/lists/ListUi.jsx'
import SelectableList from '/client/app/components/ui/lists/SelectableList.jsx'
import WorkHours      from '/client/app/components/ui/forms/WorkHours.jsx'
import {Colors}       from '/client/app/Theme';


class PageFormEmployee extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit         = this.handleSubmit.bind(this);
    this.handleChange         = this.handleChange.bind(this);
    // this.handleChangeSelect   = this.handleChangeSelect.bind(this);
    this.handleCheck          = this.handleCheck.bind(this);

    this.state={
      form:'Employee',
      nameEmployee:'',
      salon:'',
    }
  }

  componentWillMount() {
    Meteor.subscribe("employees");
    Meteor.subscribe("salons");
  }

  handleSubmit(event) {
    event.preventDefault();
    //
    // if(this.state.nameEmployee.trim() && this.state.salon.trim()){

      Meteor.call(
        "addEmployee",
        this.state.nameEmployee.trim(),
        this.state.salon.trim()
      );

      this.setState({
        nameEmployee: '',
        salon:''
      });

      console.log("ajouté !");
    // }
    // else if(!this.state.nameEmployee.trim() && !this.state.salon.trim()){
    //     console.log("Field missing");
    // }
    // else if(!this.state.nameEmployee.trim()){
    //     console.log("Name missing");
    // }
    // else if(!this.state.salon.trim()){
    //     console.log("salon missing");
    // }

  }

  handleChange(event){
    var inputName = event.target.name;
    var value     = event.target.value;
    var nextState = {};

    nextState[inputName] = value;
    nextState[inputName+'errorText'] = '';

    this.setState(nextState);
  }

  // handleChangeSelect(event, value){
  //   var id = this.data.salons[value]._id;
  //   this.setState({
  //     salon:id
  //   });
  // }

  handleCheck(event, isInputChecked){
    this.setState({
      checkedSalon: !this.state.checkedSalon
    });
  }

  getMeteorData() {
    let query = {};
    return {
      employees:   Employees.find(query, {sort: {createdAt: -1}}).fetch(),
      salons:      Salons.find(query, {sort: {createdAt: -1}}).fetch(),
      currentUser: Meteor.user()
    }
  }

  render() {

    return (

      <div className="Page PageFormEmployee">

        <TextField
            name="nameEmployee"
            floatingLabelText="Nom de l'employé"
            value={this.state.nameEmployee}
            onChange={this.handleChange}/>

        <CheckboxField
            onCheck={this.handleCheck}
            items={this.data.salons}/>

        <RaisedButton
            label="Ajouter"
            onClick={this.handleSubmit}/>

        <SelectableList
            nameList="Liste des Employés"
            items1={this.data.employees}
            items2={this.data.salons}
            form={this.state.form}/>

      </div>

    );
  }
};


reactMixin(PageFormEmployee.prototype, ReactMeteorData);

export default PageFormEmployee;
