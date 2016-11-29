import _ from 'lodash';
import React from 'react';
import VideoBGListItem from './video-bg-list-item';

export default class VideoBGList extends React.Component {
	 
	renderMedia(){
		return _.map(this.props.videos, (video, index) => <VideoBGListItem key={index} {...video} />);
	}

	render() {
		return (
			<div>
				{this.renderMedia()}
			</div>
		);
	}

}