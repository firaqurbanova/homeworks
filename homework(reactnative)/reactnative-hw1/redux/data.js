const ADD_LIST = "ADD_LIST";
const ADD_PRODUCT = "ADD_PRODUCT";
const RESET_PRODUCTS="RESET_PRODUCTS"
const DELETE_LIST = "DELETE_LIST";
const UPDATE_INFO = "UPDATE_INFO"
const DELETE_PRODUCT = "DELETE_PRODUCT"
const UPDATE_LIST = "UPDATE_LIST"
const UPDATE_PRODUCT = "UPDATE_PRODUCT"

// SELECTORS
const MODULE_NAME = "data";
export const getLists = (state) => state[MODULE_NAME].lists;
export const getUserInfo = (state) => state[MODULE_NAME].userInfo;

// REDUCER

const initialState = {
  userInfo:{
        username:"Username",
        imgUri:"",
  },
  lists: [
    {
        id: createID(),
        name: "Everything for breakfast",
        type: "regular",
        products : [
            { 
                id: createID(), 
                name: "Pasta", 
                count: 2, 
                unit: "pkg",
                bought: false,
            },
            { 
                id: createID(), 
                name: "Salt", 
                count: 1, 
                unit: "pkg", 
                bought:false,
            },
            { 
                id: createID(), 
                name: "Tomatoes", 
                count: 1, 
                unit: "kg", 
                bought:true,
            },
            { 
                id: createID(), 
                name: "Cheese", 
                count: 0.3, 
                unit: "kg",
                bought:false,
            },
        ]
    },
    {
        id: createID(),
        name: "Evening with Pizza",
        type: "onetime",
        products : [
            { 
                id: createID(), 
                name: "Pasta", 
                count: 2, 
                unit: "pkg", 
                bought:true,
            },
            { 
                id: createID(), 
                name: "Salt", 
                count: 1, 
                unit: "pkg", 
                bought:false,
            },
            { 
                id: createID(), 
                name: "Tomatoes", 
                count: 1, 
                unit: "kg",
                bought:true,
            },
            { 
                id: createID(), 
                name: "Cheese", 
                count: 0.3, 
                unit: "kg",
                bought:false,
            },
        ]
    },
    {
        id: createID(),
        name: "Kitchen repair",
        type: "regular",
        products : [
            { 
                id: createID(), 
                name: "Pasta", 
                count: 2, 
                unit: "pkg", 
                bought:true,
            },
            { 
                id: createID(), 
                name: "Salt", 
                count: 1, 
                unit: "pkg",
                bought:false,
            },
            { 
                id: createID(), 
                name: "Tomatoes", 
                count: 1, 
                unit: "kg",
                bought:true,
            },
            { 
                id: createID(), 
                name: "Cheese", 
                count: 0.3, 
                unit: "kg", 
                bought:false,
            },
        ]
    }
    
  ]
};


export function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_LIST:
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: createID(),
            name: payload.name,
            type: payload.type,
            products: [],
          },
        ],
      };
    case ADD_PRODUCT:
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === payload.listID) {
            return {
              ...list,
              products: [
                ...list.products,
                {
                  id: createID(),
                  name: payload.name,
                  count: payload.count,
                  unit: payload.unit,
                },
              ],
            };
          }
          
          return list;
        }),
      };
    
      case DELETE_LIST:
        return{
          ...state,
          lists: state.lists.filter((list)=>list.id!==payload.listID),
        };

      // case RESET_PRODUCTS:
      //   return{
      //     ...state,
      //     lists:
      //     state.lists.map((list)=>{
      //       if(list.id===payload.listID){
      //         return{
      //           ...list,
      //           products:
      //           list.products.map((item)=>{
      //             return{
      //               ...item,
      //               bought:false,
      //             };
      //           }),
      //         };
      //       }
      //       return list;
      //     }),
      //   };
      //   case UPDATE_INFO:
      //     return{
      //         ...state,
      //         userInfo: {
      //             ...state.userInfo,
      //             username: payload.username,
      //             imageUri: payload.imageUri,
      //         },
      //     };
    default:
      return state;
  }
};

// ACTION CREATORS

export const addList = (payload) => ({
  type: ADD_LIST,
  payload,
});
export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});
export const deleteList=(payload)=>({
  type: DELETE_LIST,
  payload,
});
// export const resetProducts=(payload)=>({
//   type: RESET_PRODUCTS,
//   payload,
// });
// export const updateInfo=(payload)=>({
//   type:UPDATE_INFO,
//   payload,
// });


function createID() {
  return `${Date.now()}${Math.random()}`;
};
