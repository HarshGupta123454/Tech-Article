const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading : true
            }
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            }
        case "remove":
            return{
                ...state,
                hits : state.hits.filter((ele) =>  ele.objectID!== action.payload)
                
            }
        case "srch":
            return{
                ...state ,
                query : action.payload
            }
        case "next":
            let pagen = state.page
            console.log(pagen)
            if(pagen>50){
                pagen = 50
             }else{
                 pagen =pagen+1
             }
            return{
                ...state,
                page : pagen
            }
        case "prev":
            let pages = state.page
            if(pages<=1){
               pages = 1
            }else{
                pages =pages-1
            }
            return{
                ...state,
                page : pages
            }
    }
    return state;



}
export default reducer