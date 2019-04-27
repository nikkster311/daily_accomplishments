import React, { Component } from "react";

class Boxes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  const boxOptions = [{
      text: "Journal or write",
      img: ""
    }, {
      text: "Watch the sunrise",
      img: ""
    }, {
      text: "Paint or draw",
      img: ""
    }, {
      text: "Cook a meal",
      img: ""
    }, {
      text: "Go to a play",
      img: ""
    }, {
      text: "Listen to music",
      img: ""
    }, {
      text: "Visit a friend",
      img: ""
    }, {
      text: "Learn something",
      img: ""
    }, {
      text: "Read",
      img: ""
    }, {
      text: "Take photos",
      img: ""
    }, {
      text: "Exercise",
      img: ""
    }, {
      text: "Practice mindfulness",
      img: ""
    }, {
      text: "Go outside",
      img: ""
    }, {
      text: "Go for coffee",
      img: ""
    }, {
      text: "Stargaze",
      img: ""
    }, {
      text: "Go to the beach",
      img: ""
    }, {
      text: "Play a sport",
      img: ""
    }, {
      text: "Go swimming",
      img: ""
    }, {
      text: "Lend a hand",
      img: ""
    }, {
      text: "Explore a place",
      img: ""
    }, {
      text: "Plant a garden",
      img: ""
    }, {
      text: "Go on a picnic",
      img: ""
    }, {
      text: "Podcasts",
      img: ""
    }, {
      text: "Write a poem",
      img: ""
    }, {
      text: "Make music",
      img: ""
    }, {
      text: "Watch a movie",
      img: ""
    }, {
      text: "Bake",
      img: ""
    }, {
      text: "Play boardgames",
      img: ""
    }, {
      text: "Ride a bike",
      img: ""
    }, {
      text: "Visit a park",
      img: ""
    }, {
      text: "Play with a pet",
      img: ""
    }, {
      text: "Write a letter",
      img: ""
    }, {
      text: "Light a candle",
      img: ""
    }, {
      text: "Take a bath",
      img: ""
    }, {
      text: "Burn incense",
      img: ""
    }, {
      text: "Go climbing",
      img: ""
    }, {
      text: "Do a puzzle",
      img: ""
    }, {
      text: "Have gratitude",
      img: ""
    }, {
      text: "Try a new food",
      img: ""
    }, {
      text: "Laugh",
      img: ""
    }, {
      text: "Join a group",
      img: ""
    }, {
      text: "Build something",
      img: ""
    }, {
      text: "Phone a friend",
      img: ""
    }, {
      text: "Take a nap",
      img: ""
    }, {
      text: "Sing a song",
      img: ""
    }, {
      text: "Birdwatch",
      img: ""
    }, {
      text: "Make oragami",
      img: ""
    }];

//creates a box for each item above
    createList(item) {
      return(
        <button className="indivBox">
          <p>{item.text}</p>
          <img>{item.img}</img>
        </button>
      )
    }

//all items rendered here
    render() {
      const boxOptionsList = boxOptions
      const mappedItems = boxOptionsList.map(item => this.createBoxes(item))
      return(
        <section className="mappedItems">{mappedItems}</section>
      )
    }
};

export default Boxes;
