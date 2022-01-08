import React from 'react';

const calcSubject = (props) => {
	return (
		<div className='Subject-container'>
			<div className='Subject-container-title'>
				<h3>{props.subjectName}</h3>
			</div>
			<div className='Subject-container-desc'>
				<h5>{props.subjectDesc}</h5>
			</div>
			{props.children}
		</div>
	);
};

export default calcSubject;
