/*
Separate Container Components From Presentational Components

This is a programming pattern where,
the container component does the work of figuring out what to display.
The presentational component does the work of actually displaying it.
If a component does a significant amount of work in both areas,
then that's a sign that you should use this pattern!


a presentational component will always get rendered by a container component.
 if a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn't also have to render HTML-like JSX.
Instead of rendering HTML-like JSX, the component should render another component. It should be that component's job to render HTML-like JSX.

the presentational component will always end up like this: one render() function, and no other properties.



Sateless functional component:
If you have a component class with nothing but a render function,
then you can rewrite that component class in a very different way.
Instead of using React.Component, you can write it as JavaScript function!

A component class written as a function is called a stateless functional component.



If a file exists outside of the current folder, like one over, then the import will look more like this:
import { GuineaPigs } from '../components/GuineaPigs';

A  ..  for each level of folder it must go back, and each folder needs to be named ../components/importedfile.js

*/


// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);


/*

Stateless functional components usually have props passed to them.

To access these props, give your stateless functional component a parameter.
This parameter will automatically be equal to the component's props object.

// Stateless functional component way to display a prop:
export const MyComponentClass = (props) => {
  return <h1>{props.title}</h1>;
}

They emphasize the fact that components are basically functions!
A component takes two optional inputs:
 props and state, and outputs HTML and/or other components.

*/



//EXAMPLE: GuinePigs presentational component

//After you divided GuineaPigs into GuineaPigs and GuineaPigsContainer,
//GuineaPigs was left with only a render function.
//That means that GuineaPigs can be rewritten as a stateless functional component!

//Before:
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

//After:
import React from 'react';

export const GuineaPigs = (props) => {
    let src = props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
