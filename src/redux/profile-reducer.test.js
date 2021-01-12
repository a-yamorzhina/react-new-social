import profileReducer, {addPostCreator} from "./profile-reducer";

it('postMessages length is 3', () => {
  //1.test data
  let action = addPostCreator("it-ka");
  let state = {
    postMessages: [
      {id: 1, message: "hi, how are you?", count: "5"},
      {id: 2, message: "it's my first post. LOL", count: "6"},
    ]
  };
  //2.action
  let newState = profileReducer(state, action)
//  3.expectation
  expect(newState.postMessages.length).toBe(3);

});

