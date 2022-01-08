import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

class mathArea extends Component {
	render() {
		const { formula } = this.props;
		return (
			<div className='Math-container'>
				<TeX block>{formula}</TeX>
			</div>
		);
	}
}

export default mathArea;

/*
*/
