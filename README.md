# Personal Site

## This was invented to demonstrate
I'm always looking for ways to demonstrate best practices. This repository will be used to demonstrate best practices as I see them, and all of the opinions and architecture decisions I've made here are my own. If I could do something over again, it'd likely be done this way. [See the site here](https://thessler27.github.io/).

## Site technologies
This site is built upon the following tools, which I think are important to building good systems:
1. [React](https://reactjs.org/) (specifically, [Create React App](https://github.com/facebook/create-react-app))
	* React is a powerful tool. There's really no reason that I can think of to start a project without it at this point. Create React App also automates a lot of the headache of setting up infrastructure that I often run into. "Lazy"? Maybe. But why waste time? Someone has already spend (several) hours on making this tool. Let's use it.
2. [Styled Components](https://styled-components.com/)
	* Styled components makes it easy for me to encapsulate styling and move things around different pages with ease. Only problems I've ever run into this system has to do with large css libraries overriding styling by querying against native DOM elements. This also eliminates the need for large stylesheets to determine how to run my page. I can build bottom-up and not have any difficulty down the road.
3. [Flow](https://flow.org/en/)
	* Sorry Justin. [Typechecking with Proptypes](https://reactjs.org/docs/typechecking-with-proptypes.html) has served me well in runtime, but I've found that it makes developing a lot more difficult. I've set this project up with Flow so I can easily and statically type check at build/write time. Not right for everyone, but it's my preference. (I should also note, not a _huge_ fan of Typescript. I think it's powerful if you need an extra layer of abstraction by means of a new language, but for me, JS should be written in JS. Just personal preference.)
