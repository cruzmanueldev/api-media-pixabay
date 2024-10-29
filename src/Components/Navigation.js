import React, { useState } from 'react'
import '../Styles/Components/Navigation.css'
import { Affix, Button, Input } from 'antd'
import { FaImage } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { ChangeTypeMediaReducer, GetMediaPixabayReducer } from '../Redux/Actions/Home/Home'
const { Search } = Input

const Navigation = () => {

    const dispatch = useDispatch()

    const [ txtSearch, setTxtSearch] = useState("")

    const {
        rex_type_media,
        rex_text_result
    } = useSelector(({home}) => home)

    const changeTypeMedia = (value) => {
        if(rex_type_media !== value){
            dispatch(ChangeTypeMediaReducer(value, rex_text_result))
        }
    }

    const onSearchMedia = () => {
        dispatch(GetMediaPixabayReducer(txtSearch))
    }

    return (
        <Affix offsetTop={0}>
            <nav className='container-navbar'>
                <div className='title-navbar'>API Pixabay</div>
                <div>
                    <Search
                        className='input-search'
                        onChange={({ target: {value} })=>{
                            setTxtSearch(value)
                        }}
                        onSearch={() => onSearchMedia()}
                    />
                </div>
                <div className='container-buttons-nav'>
                    <Button onClick={()=> changeTypeMedia("IMAGE")} className={`${rex_type_media==="IMAGE" && 'active'}`}>
                        <FaImage style={{fontSize:'15px'}} /><div className='input-type-search'>Image</div>
                    </Button>
                    <Button onClick={()=> changeTypeMedia("VIDEO")} className={`${rex_type_media==="VIDEO" && 'active'}`}>
                        <MdVideoLibrary   style={{fontSize:'15px'}} /><div className='input-type-search'>Video</div>
                    </Button>
                </div>
            </nav>
        </Affix>
    )
}

export default Navigation