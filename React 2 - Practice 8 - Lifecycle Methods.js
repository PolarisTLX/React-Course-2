//Lifecycle Method
//Lifecycle methods are methods that get called at certain moments in a component's life.

//There are three categories of lifecycle methods:
//mounting, updating, and unmounting.
//This lesson is about the first category: mounting lifecycle methods.

//A component "mounts" when it renders for the first time.
//This is when mounting lifecycle methods get called.

/*
There are three mounting lifecycle methods:

componentWillMount
render
componentDidMount
When a component mounts, it automatically calls these three methods, in order.

When a component renders for the first time,
componentWillMount gets called right before render.
BUT IT WILL OBLY EVER GET CALLED ONCE and not again!

*/


//EXAMPLE: Flashy
//Before:
import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {

  render() {

  	alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');

    alert('Flashy is rendering!');

    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);


setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);


//<Flashy /> alerted, "AND NOW, FOR THE FIRST TIME EVER... " both times!

//<Flashy /> needs to alert, "AND NOW, FOR THE FIRST TIME EVER..." only the first time that <Flashy /> renders.
//If you need to do something only the first time that a component renders,
//then it's probably a job for a mounting lifecycle method!

//After cutting this alert out of the render function, and paste it into the componentWillMount function instead.
//Upon clicking Run, you should see "Flashy is rendering!" both times,
//but "AND NOW, FOR THE FIRST TIME EVER... FLASHY!!!!" only the first time. Phew!

//After:
import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {

  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }

  componentDidMount() {
    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
  }

  render() {
    alert('Flashy is rendering!');

    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);


//componentDidMount
//The final mounting lifecycle method is called componentDidMount.

//When a component renders for the first time, componentDidMount gets called right after the HTML from render has finished loading.
//componentDidMount gets used a lot!

//If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call. More generally, componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks.
//componentDidMount is also the place to set timers using setTimeout or setInterval.
