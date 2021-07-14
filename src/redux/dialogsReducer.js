const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  dialogs: [{
      id: 1,
      name: 'Anna',
      img: 'https://i.pinimg.com/originals/b4/84/99/b48499490c4841d5e9e9f8faac5a0c09.jpg'
    },
    {
      id: 2,
      name: 'James',
      img: 'https://i.insider.com/5e0e2adf954bda739430b9d4'
    }
  ],
  messages: [{
      id: 1,
      message: "I'm glad to see you"
    },
    {
      id: 2,
      message: "Hey"
    }
  ],
  newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {
          id: 6,
          message: body
        }],
      };
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};

export default dialogsReducer;