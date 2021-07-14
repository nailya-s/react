import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state:{
    profilePage: {
        posts: [
            {message:'Hi, my friends', like:'1'},
            {message:'Hello the world', like:'2'}
          ],
        newPostText: ''
    },
    dialogsPage:{
        dialogs: [
            {id: 1, name: 'Anna', img: 'https://i.pinimg.com/originals/b4/84/99/b48499490c4841d5e9e9f8faac5a0c09.jpg'},
            {id: 2, name: 'James', img: 'https://i.insider.com/5e0e2adf954bda739430b9d4'}
          ], 
        messages: [
            {id: 1, message: "I'm glad to see you"},
            {id: 2, message: "Hey"}
          ],
          newMessageBody: '',
    },
    sideBar:{
      friends: [
        {name: 'Anna', img: 'https://i.pinimg.com/originals/b4/84/99/b48499490c4841d5e9e9f8faac5a0c09.jpg'},
        {name: 'James', img: 'https://i.insider.com/5e0e2adf954bda739430b9d4'}
      ]
    }
  },
  getState(){
    return this._state;
  },
  _callSubscriber(){
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);

},
subscribe(observer){
  this._callSubscriber = observer;
}
};


export default store;