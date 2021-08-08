const SEND_MESSAGE = 'SEND-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {
          id: 6,
          message: body
        }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE, 
    newMessageBody
  };
};

export default dialogsReducer;