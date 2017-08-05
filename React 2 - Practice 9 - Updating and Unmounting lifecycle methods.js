//updating and unmounting lifecycle methods
/*
What is updating?

//The first time that a component instance renders, it does not update.
//A component updates every time AFTER the first renders.

There are five updating lifecycle methods:

componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate


Whenever a component instance updates, it automatically calls all five of these methods, in order.
*/

/*
The first updating lifecycle method is called componentWillReceiveProps.

When a component instance updates, componentWillReceiveProps gets called before the rendering begins.

As one might expect, componentWillReceiveProps only gets called if the component will receive props:


// componentWillReceiveProps will get called here:
ReactDOM.render(
  <Example prop="myVal" />,
  document.getElementById('app')
);

// componentWillReceiveProps will NOT get called here:
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);

*/


//EXAMPLE:  Highest Number game:

//You want to check whether that number is, in fact, the highest number yet. If it is the highest, only then should it get displayed in the <h1></h1>.

//componentWillReceiveProps can help!

//Whenever you get a new this.props.number, componentWillReceiveProps sees it before render does. componentWillReceiveProps can scan this new this.props.number, and decide whether it should be displayed.



/*

shouldComponentUpdate
The second updating lifecycle method is called shouldComponentUpdate.

When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps,
but still before the rendering begins.

The best way to use shouldComponentUpdate is to have it return false only under certain conditions.
If those conditions are met, then your component will not update.

shouldComponentUpdate automatically receives two arguments:
nextProps and nextState.
It's typical to compare nextProps and nextState to the current this.props and this.state,
and use the results to decide what to do.


*/


/*

componentWillUpdate
The third updating lifecycle method is componentWillUpdate.

componentWillUpdate gets called in between shouldComponentUpdate and render.

componentWillUpdate receives two arguments: nextProps and nextState.

You cannot call this.setState from the body of componentWillUpdate! Which begs the question, why would you use it?

The main purpose of componentWillUpdate is to interact with things outside of the React architecture.
If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API,
then componentWillUpdate is a good place to do that.

*/


/*

componentDidUpdate
The last updating lifecycle method is componentDidUpdate.

When a component instance updates, componentDidUpdate gets called after any rendered HTML has finished loading.

componentDidUpdate automatically gets passed two arguments: prevProps and prevState. prevProps and prevState are references to the component's props and state before the current updating period began. You can compare them to the current props and state.

componentDidUpdate is usually used for interacting with things outside of the React environment, like the browser or APIs. It's similar to componentWillUpdate in that way, except that it gets called after render instead of before.

You want the game to end when a user clicks a number less than their previous click and call the endGame() method.

componentDidUpdate can do that!

*/

//EXAMPLE: Fully functioning Highest Number Game:
import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers';

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

class App extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (this.state.latestClick < prevState.latestClick) {
  this.endGame();
}
  }

  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0
    };

    this.intervals = null;

    this.hitTarget = this.hitTarget.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(setInterval(function(){
      let targets = clone(this.state.targets);
      let num = random(1, 1000*1000);
      targets[key] = targets[key] != 0 ? 0 : num;
      this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget(e) {
    if (e.target.className != 'target') return;
    let num = parseInt(e.target.innerText);
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true
    });
  }

  endGame() {
    this.intervals.forEach((int) => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0
    });
  }

  componentWillMount() {
    this.intervals = [];
  }

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(
        <Target
          number={this.state.targets[key]}
          key={key} />
      );
    }
    return (
      <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


/*

componentWillUnmount
A component's unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.

componentWillUnmount is the only unmounting lifecycle method!

componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods that require cleanup, then componentWillUnmount is where you should put that cleanup.

*/
