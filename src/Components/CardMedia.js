import React from 'react'
import { useSelector } from 'react-redux'
import CardMediaVideo from './CardMediaVideo'
import '../Styles/Components/CardMedia.css'
import MetricsMedia from './MetricsMedia'


const CardMedia = ({ media }) => {

    const {
        rex_type_media
    } = useSelector(({home}) => home)

    
    
    return (
        <div className='container-card-media'>
            <MetricsMedia media={media}/>
            {
                rex_type_media === "IMAGE"
                ?   
                    <img
                        alt={media.tags}
                        src={media.largeImageURL}
                    />
                :   <CardMediaVideo
                        media={media}
                    />
            }
            
        </div>
    )
}

export default CardMedia