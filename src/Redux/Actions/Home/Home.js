import { url_api } from "../../../config"
import { GET_DATA_MEDIA, GET_ID_MEDIA_SELECTED, GET_LOADING_DATA, GET_PAGE_MEDIA_SELECTED, GET_TEXT_RESULT, GET_TYPE_MEDIA } from "../../../Constants/Home/Home"

export const ChangeTypeMediaReducer = (value, txtSearch) => async (dispatch, getState) => {

    dispatch({
        type    : GET_TYPE_MEDIA,
        payload : value
    })

    dispatch(GetMediaPixabayReducer(txtSearch))
}

export const ChangeIdMediaReducer = (id) => async (dispatch, getState) => {

    dispatch({
        type    : GET_ID_MEDIA_SELECTED,
        payload : id
    })
}

export const ChangePageMediaReducer = (page, txtSearch) => async (dispatch, getState) => {

    dispatch({
        type    : GET_PAGE_MEDIA_SELECTED,
        payload : page
    })

    dispatch(GetMediaPixabayReducer(txtSearch))
}

export const ChangeStatusLoadingDataReducer = (loading) => async (dispatch, getState) => {

    dispatch({
        type    : GET_LOADING_DATA,
        payload : loading
    })
}

export const GetMediaPixabayReducer = (txtSearch) => async (dispatch, getState) => {

    let response = true

    const { rex_type_media, rex_page_selected } = getState().home;
    const type_media = rex_type_media === "IMAGE" ? "" : 'videos/'
    const per_page = 24
    const page = rex_page_selected
    const key_pixabay = process.env.REACT_APP_KEY_PIXABAY

    ChangeStatusLoadingDataReducer(true)

    dispatch({
        type    : GET_TEXT_RESULT,
        payload : txtSearch
    })

    await fetch(`${url_api}${type_media}?key=${key_pixabay}&q=${txtSearch}&per_page=${per_page}&page=${page}`,
        {
            method : "GET",
        },
    )
    .then( res => res.json())
    .then(async data => {
        console.log(data)
        dispatch({
            type : GET_DATA_MEDIA,
            payload : data
        })

    })
    .catch((error) => {
        response = false
        console.log(error)
    })

    ChangeStatusLoadingDataReducer(false)

    return response
}