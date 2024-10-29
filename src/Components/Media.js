import React from 'react'
import { useSelector } from 'react-redux'
import CardMedia from './CardMedia'
import { Col, Row, Empty } from 'antd'
import '../Styles/Components/Media.css'
import LoadingData from './LoadingData'

const Media = () => {

	const {
        rex_data_media,
        rex_text_result,
        rex_loading_data
    } = useSelector(({home}) => home)

    return (
        <Row
            className='container-media'
        >
            <Col 
                span={24}
            >

                {
                    rex_loading_data
                    ?   <LoadingData/>
                    :   rex_data_media.hits.length > 0
                        ?   <div className='container-cards-media'>
                                {
                                rex_data_media.hits.map((media, index) => (
                                        <CardMedia
                                            key={index}
                                            media={media}
                                        />
                                    ))
                                } 
                            </div>
                        
                        :   <div 
                                className='container-empty-media'
                            >
                                <Empty 
                                    description={<div className='description-empty-media'>No results for <span>"{rex_text_result}"</span></div>}
                                />
                            </div>
                }
            </Col>
        </Row>
    )
}

export default Media