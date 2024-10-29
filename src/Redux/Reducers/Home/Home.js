import { 
    GET_DATA_MEDIA,
    GET_TYPE_MEDIA,
    GET_ID_MEDIA_SELECTED,
    GET_PAGE_MEDIA_SELECTED,
    GET_TEXT_RESULT,
    GET_LOADING_DATA
} from "../../../Constants/Home/Home";

const INIT_STATE = {
    rex_data_media  : {
        total : null,
        hits : []
    },
    rex_type_media          : "IMAGE",
    rex_text_search         : "",
    rex_text_result         : "",
    rex_id_media_selected   : null,
    rex_page_selected       : 1,
    rex_loading_data        : false
}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case GET_TEXT_RESULT:
            return {
                ...state,
                rex_text_result : action.payload
            }
        case GET_LOADING_DATA:
            return {
                ...state,
                rex_loading_data : action.payload
            }
        case GET_PAGE_MEDIA_SELECTED:
            return {
                ...state,
                rex_page_selected : action.payload
            }
        case GET_ID_MEDIA_SELECTED:
            return {
                ...state,
                rex_id_media_selected : action.payload
            }
        case GET_DATA_MEDIA:
            return {
                ...state,
                rex_data_media : action.payload
            }
        case GET_TYPE_MEDIA:
            return {
                ...state,
                rex_type_media : action.payload
            }        
        default:
            return state
    }
}