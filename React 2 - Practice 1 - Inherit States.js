Our programming pattern uses two React components: a stateful component, and a stateless component. "Stateful" describes any component that has a state property; "stateless" describes any component that does not.

In our pattern, a stateful component passes its state down to a stateless component.


//Since Parent is supposed to be stateful, it will need to set its initial state. That means that it will need a constructor method.

//This whole constructor part is needed to set a state each time?
constructor(props) {
  super(props);
  this.state = { };
}


//Rendering = initializing?
//Rendering is the only way for a component to pass props to another component.

//A <Parent /> is going to pass a prop to a <Child />.
//That means that a <Parent /> is going to render a <Child />.
//Rendering <Parent /> will render both components, because Parent's render function returns a <Child />.

//Before a <Parent /> can pass anything to a <Child />, you need to import Child into Parent.js.

//Any component rendered by a different component (different file?) must be included in an export statement.



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
    return <Child name={this.state.name}/>;
  }
}

ReactDOM.render (
  <Parent />,
  document.getElementById('app')
);


//File Child.js:
import React from 'react';
import ReactDOM from 'react-dom';  //this is not needed?

export class Child extends React.Component {

  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}

//These two posts:  "Hey, my name is Frarthur!"


//NOTE:  A component should never update this.props.

//This is potentially confusing. props and state store dynamic information. Dynamic information can change, by definition. If a component can't change its props, then what are props for?
//A React component should use props to store information that can be changed, but can only be changed by a different component.
//A React component should use state to store information that the component itself can change.


//In the above example: you passed information from a stateful, parent component to a stateless, child component.
//In this next example, you'll be expanding on that pattern. The stateless, child component will update the state of the parent component.

//Bit confusing with a bit going on here:

//Step 1:  File Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}

//Step 2:  File Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}

//Step 3:  File Child.js
import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}
