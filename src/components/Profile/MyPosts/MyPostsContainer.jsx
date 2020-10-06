import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return <StoreContext.Consumer>
      {
        store => {

          let state = store.getState();

          let addPost = () => {
            store.dispatch(addPostCreator())
          };

          let onPostChange = (text) => {
            let action = updateNewPostTextCreator(text);
            store.dispatch(action)
          };

          return <MyPosts updateNewPostText={onPostChange}
                          addPost={addPost}
                          postMessages={state.profilePage.postMessages}
                          newPostText={state.profilePage.newPostText}/>
        }
      }
    </StoreContext.Consumer>
  }
;

export default MyPostsContainer;
