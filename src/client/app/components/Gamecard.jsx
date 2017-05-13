import React, { Component } from 'react';

class Gamecard extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { data } = this.props;
		return (<div>
					<div ref="gamescore">
						<div>
							<div>
								<span>{data.home}</span>
							</div>

							<div>
								<span>{data.away}</span>
							</div>
						</div>
					</div>

					<div ref="playerstats">
					</div>

					<div ref="boxscorelink">
					</div>
				</div>);
	}
}

const styles = {
	containerStyle: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	}
}

export default Gamecard;