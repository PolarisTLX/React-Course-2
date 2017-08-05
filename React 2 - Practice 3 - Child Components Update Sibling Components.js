//Child Components Update Sibling Components
//Patterns within patterns within patterns!

//In this lesson, we will expand the pattern one last time. A child component updates its parent's state, and the parent passes that state to a sibling component.

//An understanding of this final pattern will be very helpful in the wild, not to mention in the next React course.


//One Sibling to Display, Another to Change

//In the last lesson, Child had two jobs:

//1 - Child displayed a name.
//2 - Child offered a way to change that name.

//One of the very first things that you learned about components is that they should only have one job.



// the essential new concept for this lesson: you will have one stateless component display information, and a different stateless component offer the ability to change that information.


/*
Here is finaly working example needing 3 files:
This execute a COMPLETE React programming pattern!

What it posts:

[A drop down menu of names to choose]
Hey, my name is Gromulus!
Don't you think Gromulus is the prettiest name ever?
Sure am glad that my parents picked Gromulus!
*/

//File: Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

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
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);


//File: Child.js
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
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}


//File: Sibbling.js
import React from 'react';

export class Sibling extends React.Component {
  render() {

    let name = this.props.name;

    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}
