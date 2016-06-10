import React                from 'react';
import SelectField          from 'material-ui/SelectField';
import MenuItem             from 'material-ui/MenuItem';

class Select extends React.Component {

  constructor(props) {
    super(props);
  }

  getListItem(){
    return this.props.items.map((item, i) => (
        <MenuItem key={i} value={i} primaryText={item.name}/>
    ));
  }

  render() {
    return (
      <SelectField
        name={this.props.name}
        value={this.props.value}
        floatingLabelText={this.props.floatingLabelText}
        onChange={this.props.onChange}>
        {this.getListItem()}
      </SelectField>
    );
  }
}

export default Select;



// <Select
//     name="salon"
//     value={this.state.salonSelectValue}
//     floatingLabelText="Sélectionner un salon"
//     onChange={this.handleChangeSelect}
//     items={this.data.salons}/>
