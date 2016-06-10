import React    from 'react';
import Checkbox from 'material-ui/Checkbox';

class CheckboxField extends React.Component {

  constructor(props) {
    super(props);
    this.getListItem         = this.getListItem.bind(this);

    this.state={}
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  getListItem(){
    return this.props.items.map((item, i) => (
        <Checkbox
            key     =  {i}
            label   =  {item.name}
            onCheck =  {this.props.onCheck}
            checked =  {item.checked}/>
    ));
  }

  render() {
    return (
      <div>
        {this.getListItem()}
      </div>
    );
  }
}

export default CheckboxField;
