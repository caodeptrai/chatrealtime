import {
    createContext,
    useReducer,
  } from "react";

  
  export const GroupContext = createContext();
  
  export const GroupContextProvider = ({ children }) => {

    const INITIAL_STATE = {
        roomId:"",
        room:{}
    };
  
    const roomReducer = (state, action) => {
      switch (action.type) {
        case "SELECTEDROOM_ID":
          return {
            roomId:action.payload.id,
            room:action.payload
            
           
          };
  
        
        default:
          return state;
      }
    };
  
    const [state, dispatch] = useReducer(roomReducer, INITIAL_STATE);
    console.log("abcd",state)
    return (
      <GroupContext.Provider value={{ result:state, dispatch }}>
        {children}
      </GroupContext.Provider>
    );
  };