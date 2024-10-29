import React, { useEffect } from 'react'
import Navigation from '../Components/Navigation'
import Media from '../Components/Media'
import { useDispatch, useSelector } from 'react-redux'
import { GetMediaPixabayReducer } from '../Redux/Actions/Home/Home'
import FooterButtons from '../Components/FooterButtons'

const Home = () => {

    const dispatch = useDispatch()

    const {
        rex_data_media,
    } = useSelector(({home}) => home)

    const getData = () => {
        dispatch(GetMediaPixabayReducer(""))
    }

    useEffect(()=> {
        getData()
    },[])

    return (
        <>
            <Navigation/>
            <Media/>
            {
                rex_data_media.total > 0
                && <FooterButtons/>
            }
        </>
    )
}

export default Home