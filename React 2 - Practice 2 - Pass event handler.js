//Complicated example. Make a drop down menu selection change the text on the screen

//We now need to make sure that the .changeName() method will always refer to the instance of Parent, even when we pass it down to Child to use.
//In the constructor method of Parent, bind this.changeName to the current value of this and store it in this.changeName.
//This means write:  this.changeName = this.changeName.bind(this);


//BEFORE:
//File Parent.js:
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name={this.state.name} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);


//File Child.js:
import React from 'react';

export class Child extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names">
          <option value="Frarthur">
            Frarthur
          </option>
          <option value="Gromulus">
            Gromulus
          </option>
          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}




//AFTER:
//File: Parent.js:
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);


//File: Child.js:
import React from 'react';

export class Child extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
