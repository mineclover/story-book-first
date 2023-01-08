import React, { useState } from 'react';
import styled from 'styled-components';
import Buttons from './MyButton';

// 밖에 선언하면 한번만 되지 않을까

const MySelectBox = ({ data }) => {
	const [selects, setSelects] = useState([]);

	return (
		<div>
			<div>{selects}</div>

			{data.map((item, index) => {
				return <Buttons name={item} key={index} setSelects={setSelects} />;
			})}
		</div>
	);
};

export default MySelectBox;
