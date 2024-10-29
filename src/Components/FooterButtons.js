import React from 'react'
import {
    CaretLeftOutlined,
    CaretRightOutlined
  } from '@ant-design/icons';
import { FloatButton } from 'antd';
import '../Styles/Components/FooterButtons.css'
import { useDispatch, useSelector } from 'react-redux';
import { ChangePageMediaReducer } from '../Redux/Actions/Home/Home';

const FooterButtons = () => {

    const {
        rex_page_selected,
        rex_data_media,
        rex_text_result
    } = useSelector(({home}) => home)

    const dispatch = useDispatch()

    const changePrevPageMedia = () => {
        if(rex_page_selected > 1){
            const pagePrev = rex_page_selected-1
            dispatch(ChangePageMediaReducer(pagePrev, rex_text_result))
        }
    }

    const changeNextPageMedia = () => {
        const maxPage = Math.ceil(rex_data_media.total/24)
        if(rex_page_selected < maxPage){
            const pageNext = rex_page_selected + 1
            dispatch(ChangePageMediaReducer(pageNext, rex_text_result))
        }
    }

    const enablePagePrevMedia = () => {
        return rex_page_selected > 1
    }

    const enablePageNextMedia = () => {
        const maxPage = Math.ceil(rex_data_media.total/24)
        return rex_page_selected < maxPage  
    }

    return (
        <div>
            <FloatButton
                className='button-pagination'
                onClick={() => changePrevPageMedia()}
                icon={<CaretLeftOutlined style={{color:'#FFFFFF'}}/>}
                style={{
                    insetInlineEnd: 74,
                    opacity: enablePagePrevMedia() ? '1' : '0.5',
                    transform: enablePagePrevMedia() ? 'scale(1)' : 'scale(0.8)',
                }}
                />
            <FloatButton
                className='button-pagination'
                onClick={() => changeNextPageMedia()}
                icon={<CaretRightOutlined style={{color:'#FFFFFF'}}/>}
                style={{
                    iinsetInlineEnd: 24,
                    opacity: enablePageNextMedia() ? '1' : '0.5',
                    transform: enablePageNextMedia() ? 'scale(1)' : 'scale(0.8)',
                }}
            />
        </div>
    )
}

export default FooterButtons