//Style in React

//An inline style is a style that's written as an attribute, like this:

<h1 style={{ color: 'red' }}>Hello world</h1>

//Notice the double curly braces {{ }}   . What are those for?
//The outer curly braces inject JavaScript into JSX.
//They say, "everything between us should be read as JavaScript, not JSX."
//The inner curly braces create a JavaScript object literal.

//They make this a valid JavaScript object:
{ color: 'red' }


//That's all that you need to apply basic styles in React! Simple and straightforward.

//One problem with this approach is that it becomes obnoxious if you want to use more than just a few styles.
//An alternative that's often nicer is to store a style object in a variable, and then inject that variable into JSX.

//EXAMPLE:
import React from 'react';
import ReactDOM from 'react-dom';

let styles = {
  background: 'lightblue',
  color:      'darkred'
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);

//WEIRD NOTE:
//In regular JavaScript, style names are written in hyphenated-lowercase:
const styles = {
  'margin-top':       "20px",
  'background-color': "green"
};

//In React, those same names are instead written in camelCase:
const styles = {
  marginTop:       "20px",
  backgroundColor: "green"
};

//This has zero effect on style property values, only on style property names.

//ALSO:  All the style values must be in between  ' '   marks. Unless they are just number:

//In React, if you write a style value as a number, then the unit "px" is assumed.
//If you want a font size of 30px, you can write:
{ fontSize: 30 }

//If you want to use units other than "px," you can use a string:
{ fontSize: "2em" }

//Specifying "px" with a string will still work, although it's redundant.
//could just put everything in quotes ' '  just to be careful
