import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    postMessages: state.profilePage.postMessages,
    newPostText: state.profilePage.newPostText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextCreator(text);
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostCreator())
    }
  }
};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
