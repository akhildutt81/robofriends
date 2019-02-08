import React from 'react';
import './Card.css';
const Card=({id,name,email})=>{
	var t='https://robohash.org/'+id+'?bgset=bg1&size=180x180';
	return (
		<div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
			<img className='br3 ma1' alt='robots' src={t} />
			<div>
				<h4>{name}</h4>
				<small><p>{email}</p></small>
			</div>
		</div>
	);
}

export default Card;