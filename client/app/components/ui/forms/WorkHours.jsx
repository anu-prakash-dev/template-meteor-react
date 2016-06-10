import React          from 'react';
import Time           from '/client/app/components/ui/forms/Time.jsx';
import Subheader      from 'material-ui/Subheader';
import Dialog         from 'material-ui/Dialog';

class WorkHours extends React.Component{

  constructor(props){
      super(props);
      this.handleChangeTime     = this.handleChangeTime.bind(this);
      this.handleClose          = this.handleClose.bind(this);

      this.state={
        open:           true,
        heureDebut:     [],
        heureFin:       [],
      }
  }

  handleChangeTime(event, date){
    console.log(date);
  }

  handleClose(){
    this.setState({open: false});
  }

  render() {
    return (

<div>
        <Subheader>Lundi</Subheader>
        <Time
            name="heureDebut"
            format="ampm"
            hintText="Heure de début"
            value={this.state.heureDebut}
            onChange={this.handleChangeTime}/>

        <Time
            name="heureFin"
            format="ampm"
            hintText="Heure de fin"
            onChange={this.handleChangeTime}/>
  </div>
    );
  }

};


export default WorkHours;
