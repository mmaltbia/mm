import React from 'react';

export default class VideoBGListItem extends React.Component {
	render(){
		return(
			<ul>
				<li>
					<iframe width="500" height="320" src={"'" + this.props.url + "'"} />
				</li>
			</ul>
		);
	}
}