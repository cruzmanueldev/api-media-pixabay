import { useDispatch, useSelector } from 'react-redux'
import { ChangeIdMediaReducer } from '../Redux/Actions/Home/Home'

const CardMediaVideo = ({media}) => {

    const {
        rex_id_media_selected
    } = useSelector(({home}) => home)

    const dispatch = useDispatch()

    return (
        <>
            {
                rex_id_media_selected === media.id
                ?   <video
                        autoPlay
                    >
                        <source src={media.videos?.medium.url} type="video/mp4"/>
                    </video>
                :   <img 
                        src={media.videos?.medium.thumbnail}
                        alt={media.tags}
                        onClick={()=> {
                            dispatch(ChangeIdMediaReducer(media.id))
                        }}
                    />
            }
        </>
    )
}

export default CardMediaVideo