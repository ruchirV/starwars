import React from 'react'
import './HomeCard.css'
import '../index.css'

const HomeCard = (props) => {
	return (
		<div className="homecard grow" 
			onClick={props.onCardClick}>
			{props.title}
		</div>
	)
}

export default HomeCard;
