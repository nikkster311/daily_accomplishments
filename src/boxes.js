import React, { Component } from "react";


const boxOptions = [
     "Journal or write",
     "Watch the sunrise",
     "Paint or draw",
     "Cook a meal",
     "Go to a play",
     "Listen to music",
     "Visit a friend",
     "Learn something",
     "Read",
     "Take photos",
     "Exercise",
     "Practice mindfulness",
     "Go outside",
     "Go for coffee",
     "Stargaze",
     "Go to the beach",
     "Play a sport",
     "Go swimming",
     "Lend a hand",
     "Explore a place",
     "Plant a garden",
     "Go on a picnic",
     "Podcasts",
     "Write a poem",
     "Make music",
     "Watch a movie",
     "Bake",
     "Play boardgames",
     "Ride a bike",
     "Visit a park",
     "Play with a pet",
     "Write a letter",
     "Light a candle",
     "Take a bath",
     "Burn incense",
     "Go climbing",
     "Do a puzzle",
     "Have gratitude",
     "Try a new food",
     "Laugh",
     "Join a group",
    "Build something",
     "Phone a friend",
     "Take a nap",
     "Sing a song",
     "Birdwatch",
     "Make oragami",
   ];



class Boxes extends Component {


//creates a box for each item above
    createList(item) {
      return(
        <button onClick={this.props.onClick} value={item} className="indivBox">
          <p>{item}</p>
        </button>
      )
    }

//all items rendered here
    render() {
      const boxOptionsList = boxOptions
      const mappedItems = boxOptionsList.map(item => this.createList(item))
      return(
        <section className="mappedItems">{mappedItems}</section>
      )
    }
};

export default Boxes;


//
//  "Journal or write",
//
//
//  "Watch the sunrise",
//
//
//  "Paint or draw",
//
//
//  "Cook a meal",
//
//
//  "Go to a play",
//
//
//  "Listen to music",
//
//
//  "Visit a friend",
//
//
//  "Learn something",
//
//
//  "Read",
//
//
//  "Take photos",
//
//
//  "Exercise",
//
//
//  "Practice mindfulness",
//
//
//  "Go outside",
//
//
//  "Go for coffee",
//
//
//  "Stargaze",
//
//
//  "Go to the beach",
//
//
//  "Play a sport",
//
//
//  "Go swimming",
//
//
//  "Lend a hand",
//
//
//  "Explore a place",
//
//
//  "Plant a garden",
//
//
//  "Go on a picnic",
//
//
//  "Podcasts",
//
//
//  "Write a poem",
//
//
//  "Make music",
//
//
//  "Watch a movie",
//
//
//  "Bake",
//
//
//  "Play boardgames",
//
//
//  "Ride a bike",
//
//
//  "Visit a park",
//
//
//  "Play with a pet",
//
//
//  "Write a letter",
//
//
//  "Light a candle",
//
//
//  "Take a bath",
//
//
//  "Burn incense",
//
//
//  "Go climbing",
//
//
//  "Do a puzzle",
//
//
//  "Have gratitude",
//
//
//  "Try a new food",
//
//
//  "Laugh",
//
//
//  "Join a group",
//
//
//  "Build something",
//
//
//  "Phone a friend",
//
//
//  "Take a nap",
//
//
//  "Sing a song",
//
//
//  "Birdwatch",
//
//
//  "Make oragami",
//
// }];
