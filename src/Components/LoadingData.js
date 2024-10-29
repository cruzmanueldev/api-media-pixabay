import React from 'react'
import { Spin } from 'antd'
import '../Styles/Components/LoadingData.css'

const LoadingData = () => {
	return (
		<div className='Container-Loading-Data'>
			<Spin 
				size='large'
				style={{
					color:'red'
				}}
			/>
		</div>
	)
}

export default LoadingData