import React, { useReducer ,useEffect} from 'react'
import { createContext , useContext } from 'react';
import reducer from './Reducer';

let API = "https://hn.algolia.com/api/v1/search?"

const AppContext =createContext();



//reducer initail state 

const initialState = {
    isLoading : true,
    query: "CSS",
    nbPages :0,
    page:0,
    hits:[]
}


//to create providor function
const AppProvider = ({children}) =>{

    const [state , dispatch] = useReducer(reducer , initialState);


    

    const  fetchapiData = async (url) =>{

        dispatch({type :"SET_LOADING"})

        try{
            const res = await fetch(url);
            const data = await res.json()
            console.log(data)
            dispatch({type:"GET_STORIES",
        payload :{
            hits: data.hits,
            nbPages: data.nbPages
        }})

        }catch (error){
            console.log(error)

        }
    }

    //to remove post

    const removes =(id)=>{
        dispatch({type : "remove",
    payload : id})

    }

    //to search
    const search =(ch) =>{
        dispatch({type : "srch" , payload : ch})
    }

    //pages
    const getPrevPage =() =>{
        dispatch({type : "prev" })
    }

    const getNextPage =() =>{
        dispatch({type : "next"})
    }



    useEffect(() =>{
        fetchapiData(`${API}query=${state.query}&page=${state.page}`)
    },[state.query , state.page])

    return (
        <AppContext.Provider value={{...state ,removes ,search , getPrevPage , getNextPage}}>
            {children}
        </AppContext.Provider>
    );
};


const useGlobalContext = ()=>{
    return useContext(AppContext)

}



export { AppContext ,AppProvider ,useGlobalContext}