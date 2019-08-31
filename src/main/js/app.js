'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>Hello React In Spring Boot</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)

