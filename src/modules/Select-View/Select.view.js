import React, { PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { browserHistory } from 'react-router';

const style = {
  display: "block",
  margin: "auto 12em"
};

class Select extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: -1 };
  }

  handleSelect (event, index, value) {
    this.props.chooseQuiz({
      name: this.props.quizzes.filter(quiz => quiz.id === value)[0].name,
      id: value
    });

    browserHistory.push('/' + this.props.session.mode);
  }

  render () {
    return (
      <DropDownMenu value={ this.state.value } style={ style } autoWidth={ false } onChange={ this.handleSelect.bind(this) }>
        <MenuItem value={ -1 } primaryText="Select a Quiz..." disabled={ true }/>
        { this.props.quizzes.map(quiz => (
            <MenuItem key={ quiz.id } value={ quiz.id } primaryText={ quiz.name } />
          ))
        }
      </DropDownMenu>
    );
  }
}

Select.propTypes = {
  quizzes: PropTypes.array.isRequired,
  session: PropTypes.object.isRequired,
  chooseMode: PropTypes.func.isRequired,
  chooseQuiz: PropTypes.func.isRequired
};

export default Select;
