let store = {

  rerenderEntireTree() {

  },

  addPost() {

    let newPost = {
      id: 3,
      message: this.getState.profilePage.newPostText,
      count: 0
    };

    this.getState.profilePage.postMessages.push(newPost);
    this.getState.profilePage.newPostText = '';
    this.rerenderEntireTree(this.getState);

  },

  updateNewPostText(newText) {

    this.getState.profilePage.newPostText = newText;
    this.rerenderEntireTree(this.getState);

  },

  addMessage() {

    let newMessage = {
      id: 8,
      message: this.getState.dialogsPage.newMessageText,
    };

    this.getState.dialogsPage.messages.push(newMessage);
    this.getState.dialogsPage.newMessageText = '';
    this.rerenderEntireTree(this.getState);

  },

  updateNewMessageText(newText) {
    this.getState.dialogsPage.newMessageText = newText;
    this.rerenderEntireTree(this.getState);
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  getState() {
    return this._state;
  },


  _state: {

    sidebar: {
      nav: [
        {id: 1, route: "/profile", name: "Profile"},
        {id: 2, route: "/dialogs", name: "Messages"},
        {id: 3, route: "/news", name: "News"},
        {id: 4, route: "/music", name: "Music"},
        {id: 5, route: "/settings", name: "Settings"},
        {id: 6, route: "/friends", name: "Friends"},
      ],
      friendsBlock: [
        {
          id: 1,
          name: "Charlotte",
          src: "https://www.thewebcoffee.net/wp-content/uploads/2018/01/sex-and-the-city-charlotte.jpg"
        },
        {
          id: 2,
          name: "Miranda",
          src: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/5455/square_thumb%402x.jpg"
        },
        {
          id: 3,
          name: "Mr.Big",
          src: "https://i0.wp.com/tellmemore.media/wp-content/uploads/2018/11/in-derde-film-sex-and-the-city-zou-mr-big-doodgegaan-zijn.jpg?fit=256%2C256&ssl=1"
        },
        {
          id: 4,
          name: "Samantha",
          src: "https://transcoder.plex.tv/photo?height=256&minSize=1&upscale=1&width=256&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fpeople%2F5d77682654c0f0001f301d69.jpg"
        },
      ]
    },

    profilePage: {
      postMessages: [
        {id: 1, message: "hi, how are you?", count: "5"},
        {id: 2, message: "it's my first post. LOL", count: "6"},
      ],
      newPostText: '',
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Tom Clinton",
          src: "https://pbs.twimg.com/profile_images/649041329721249793/rKR879eg_400x400.jpg"
        },
        {
          id: 2,
          name: "Ciara Tess",
          src: "https://pbs.twimg.com/profile_images/631522304954994688/KZ40WT4X_400x400.jpg"
        },
        {id: 3, name: "Jim Kerry", src: "https://www.theplace.ru/archive/00_icons/921_icon_128.jpg"},
        {
          id: 4,
          name: "Ariana Gray",
          src: "https://ubisoft-avatars.akamaized.net/6a6ed758-2ad3-4aa2-9b3d-043c8f6e029c/default_256_256.png"
        },
        {
          id: 5,
          name: "Tom Cruz",
          src: "https://image1.thematicnews.com/uploads/topics/preview/00/05/67/03/d8c6011c8f_256crop.jpg"
        },
        {id: 6, name: "Andrew Belle", src: "https://a.wattpad.com/useravatar/lor-enzos.256.397320.jpg"},
      ],
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Okay, okay"},
      ],
      newMessageText: '',
    },

  },

};


// let rerenderEntireTree = () => {
//
// };
//
// export let addPost = () => {
//
//   let rerenderEntireTree = () => {
//
//   };
//
//   let newPost = {
//     id: 3,
//     message: state.profilePage.newPostText,
//     count: 0
//   };
//
//   state.profilePage.postMessages.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);
//
// };
//
// export let updateNewPostText = (newText) => {
//
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
//
// };
//
// export let addMessage = () => {
//
//   let newMessage = {
//     id: 8,
//     message: state.dialogsPage.newMessageText,
//   };
//
//   state.dialogsPage.messages.push(newMessage);
//   state.dialogsPage.newMessageText = '';
//   rerenderEntireTree(state);
//
// };
//
// export let updateNewMessageText = (newText) => {
//   state.dialogsPage.newMessageText = newText;
//   rerenderEntireTree(state);
// };
//
// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// };
//
//
// let state = {
//
//   sidebar: {
//     nav: [
//       {id: 1, route: "/profile", name: "Profile"},
//       {id: 2, route: "/dialogs", name: "Messages"},
//       {id: 3, route: "/news", name: "News"},
//       {id: 4, route: "/music", name: "Music"},
//       {id: 5, route: "/settings", name: "Settings"},
//       {id: 6, route: "/friends", name: "Friends"},
//     ],
//     friendsBlock: [
//       {
//         id: 1,
//         name: "Charlotte",
//         src: "https://www.thewebcoffee.net/wp-content/uploads/2018/01/sex-and-the-city-charlotte.jpg"
//       },
//       {
//         id: 2,
//         name: "Miranda",
//         src: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/5455/square_thumb%402x.jpg"
//       },
//       {
//         id: 3,
//         name: "Mr.Big",
//         src: "https://i0.wp.com/tellmemore.media/wp-content/uploads/2018/11/in-derde-film-sex-and-the-city-zou-mr-big-doodgegaan-zijn.jpg?fit=256%2C256&ssl=1"
//       },
//       {
//         id: 4,
//         name: "Samantha",
//         src: "https://transcoder.plex.tv/photo?height=256&minSize=1&upscale=1&width=256&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fpeople%2F5d77682654c0f0001f301d69.jpg"
//       },
//     ]
//   },
//
//   profilePage: {
//     postMessages: [
//       {id: 1, message: "hi, how are you?", count: "5"},
//       {id: 2, message: "it's my first post. LOL", count: "6"},
//     ],
//     newPostText: '',
//   },
//
//   dialogsPage: {
//     dialogs: [
//       {id: 1, name: "Tom Clinton", src: "https://pbs.twimg.com/profile_images/649041329721249793/rKR879eg_400x400.jpg"},
//       {id: 2, name: "Ciara Tess", src: "https://pbs.twimg.com/profile_images/631522304954994688/KZ40WT4X_400x400.jpg"},
//       {id: 3, name: "Jim Kerry", src: "https://www.theplace.ru/archive/00_icons/921_icon_128.jpg"},
//       {
//         id: 4,
//         name: "Ariana Gray",
//         src: "https://ubisoft-avatars.akamaized.net/6a6ed758-2ad3-4aa2-9b3d-043c8f6e029c/default_256_256.png"
//       },
//       {
//         id: 5,
//         name: "Tom Cruz",
//         src: "https://image1.thematicnews.com/uploads/topics/preview/00/05/67/03/d8c6011c8f_256crop.jpg"
//       },
//       {id: 6, name: "Andrew Belle", src: "https://a.wattpad.com/useravatar/lor-enzos.256.397320.jpg"},
//     ],
//     messages: [
//       {id: 1, message: "Hi"},
//       {id: 2, message: "How are you?"},
//       {id: 3, message: "Okay, okay"},
//     ],
//     newMessageText: '',
//   },
//
// };

export default store;
