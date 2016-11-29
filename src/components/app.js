import React from 'react';
import VideoBGList from './video-bg-list';
import Sidebar from './nav';


const videos = [
	{
		name: 'Gold Glitter',
		url: 'https://youtu.be/43ngkc2Ejgw?list=PLZS3UpgM2zKMWkcbJn5PS5FhZFmeUMozS'
	}, 
	{
		name: 'Line of Fire',
		url: 'https://youtu.be/hCmpgAn9q0A?list=PLZS3UpgM2zKMWkcbJn5PS5FhZFmeUMozS' 
	}
]

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			videos
		}; 
	}

	componentWillMount(){
		var firebaseRef = firebase.database().ref();
		firebaseRef.child('videoBGs').set('https://youtu.be/43ngkc2Ejgw?list=PLZS3UpgM2zKMWkcbJn5PS5FhZFmeUMozS');
		// console.log(firebaseRef.child('videoBGs');
		// this.firebaseRef = new Firebase('https://media-motion.firebaseio.com/videoBGs')
	}

	render() {
		return (
			<div id="wrapper">
				<Sidebar />
		        <div id="page-content-wrapper">
		            <div className="container-fluid">
		            	<a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Toggle Menu</a>
		                <button className="btn btn-primary">Upload Background</button> 
						<VideoBGList videos={this.state.videos}/>
		            </div>
		        </div>
			</div>
		);
	}

}