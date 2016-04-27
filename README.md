# Gomoku, by Erik Sundell
A webpage to play Gomoku against other humans, developed in Meteor and React using Mantra architecture.

## Live
Try a live demonstration at [gomoku-demo.herokuapp.com](https://gomoku-demo.herokuapp.com/)

## Tech in project

* [Meteor](https://www.meteor.com/) (1.3.2.4)
    * [FlowRouter](https://github.com/kadirahq/flow-router) (2.11.0)
* [React](https://facebook.github.io/react/) (0.14.7) (Overkill)
* [Mantra](https://kadirahq.github.io/mantra/) (0.2.0) (Overkill)
    * [Mantra-CLI](https://github.com/mantrajs/mantra-cli) (0.3.11)
    * [react-komposer](https://github.com/kadirahq/react-komposer)
    * [react-mounter](https://github.com/kadirahq/react-mounter)
    * [react-simple-di](https://github.com/kadirahq/react-simple-di)
* [Material Design Lite](https://getmdl.io) (1.1.3)
* [ES2015](https://babeljs.io/docs/learn-es2015/)
* [Git](https://git-scm.com/) (2.8.1)
    * [GitHub](https://github.com)
* [Heroku](https://www.heroku.com/)
    * [Meteor Buildpack Horse](https://github.com/AdmitHub/meteor-buildpack-horse) (82c0e23)
    * [MongoLab](https://elements.heroku.com/addons/mongolab)

## Recent learning and refreshing

* [Meteor](https://www.meteor.com/) (Tutorials & Guide)
* [LevelUpTuts](https://leveluptutorials.com/)
    * [Atom](https://www.youtube.com/watch?v=WWwBQQOGllo&list=PLLnpHn493BHHf0w8uGu9NM8LPf498ZvL_)
    * [Meteor](https://www.youtube.com/watch?v=BI8IslJHSag&list=PLLnpHn493BHFYZUSK62aVycgcAouqBt7V)
    * [React](https://www.youtube.com/watch?v=eOctQZ1EV0E&list=PLLnpHn493BHFfs3Uj5tvx17mXk4B4ws4p)
    * [Meteor + React](https://www.youtube.com/watch?v=B_HJCmoSvmc&list=PLZqiqJ6M54_hojR8RG4gRIobIZFX0cQve)
    * [SASS](https://www.youtube.com/watch?v=fbVD32w1oTo&list=PL2CB1F80266E986EA)
        * [Susy](https://www.youtube.com/watch?v=KYpqPZCzbwA&list=PLLnpHn493BHF-TxB5PqpKfJ_XjTwP5utB)
* [CodeSchool](https://www.codeschool.com/)
    * [MongoDB](https://www.codeschool.com/courses/the-magical-marvels-of-mongodb)
    * [ES2015](https://www.codeschool.com/courses/es2015-the-shape-of-javascript-to-come)
    * [Git](https://www.codeschool.com/learn/git)
    * [HTML5 / CSS3 / SVG / SASS / Design](https://www.codeschool.com/learn/html-css)

## Challanges faced
* Utilizing `React` for the first time.
* Implementing `Mantra` project architecture using `react-komposer`, `react-mounter`, `react-simple-di`, and learning how they play along with meteors `Tracker` and trackable variables such as `Meteor.user()`.
* Implementing `Material Design Lite` in a `React` application ([Community interaction](https://github.com/google/material-design-lite/issues/4274)).
* Implmenting basic login using `accounts-base` and `accounts-password` in React with dynamic DOM-rendering.
* Handling an increasing amount of states (user login / challenges / game), time to learn Redux?
* Designing a Gomoku-board with HTML and SASS with minor animations.
