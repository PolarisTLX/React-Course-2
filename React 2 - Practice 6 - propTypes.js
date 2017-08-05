//propTypes


/*

propTypes are useful for two reasons. The first reason is prop validation.

Validation can ensure that your props are doing what they're supposed to be doing.
If props are missing, or if they're present but they aren't what you're expecting,
then a warning will print in the console.

This is useful, but reason #2 is arguably more useful: documentation.

Documenting props makes it easier to glance at a file and quickly understand the component class inside.
 When you have a lot of files, and you will, this can be a huge benefit.

*/


//EXAMPLE:
import React from 'react';

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};

//If a component class expects a prop, then you can give that component class a propType!

//Notice that the value of propTypes is an object, not a function!

//The second step is to add a property to the propTypes object.
//For each prop that your component class expects to receive,
// there can be one property on your propTypes object.

//MessageDisplayer only expects one prop: message.
//Therefore, its propTypes object only has one property.


// In our case, MessageDisplayer expects a prop named message, so our property's name is message.
//The value of each property in propTypes should fit this pattern:

React.PropTypes.expected-data-type-goes-here

//Since message is presumably going to be a string, we chose
React.PropTypes.string.

// Note that bool and func are abbreviated, but all other datatypes are spelled normally.

//If you add .isRequired to a propType, Ex:

Runner.propTypes = {
  message:   React.PropTypes.string.isRequired,

//then you will get a console warning if that prop isn't sent.

//FULL EXAMPLE:
import React from 'react';

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>  {this.props.title}    </span><br />
        Author: <span>  {this.props.author}    </span><br />
        Weeks: <span>   {this.props.weeksOnList} </span>
      </li>
    );
  }
}

BestSeller.propTypes = {
 title: React.PropTypes.string.isRequired,
 author: React.PropTypes.string.isRequired,
 weeksOnList: React.PropTypes.number.isRequired
};


//To write propTypes for a stateless functional component,
//you define a propTypes object as a property of the stateless functional component itself.
//Here's what that looks like:

const Example = (props) => {
  return <h1>{props.message}</h1>;
}

Example.propTypes = {
  message: React.PropTypes.string.isRequired
};


//FULL EXAMPLE for GineaPigs:
import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

GuineaPigs.propTypes = {
  src: React.PropTypes.string.isRequired
};
