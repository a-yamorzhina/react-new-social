let initialState = {
  nav: [
    {id: 1, route: "/profile", name: "Profile"},
    {id: 2, route: "/dialogs", name: "Messages"},
    {id: 3, route: "/news", name: "News"},
    {id: 4, route: "/music", name: "Music"},
    {id: 5, route: "/settings", name: "Settings"},
    {id: 6, route: "/users", name: "All users"},
    {id: 7, route: "/friends", name: "Friends"},

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
};


const sidebarReducer = (state = initialState, action) => {

  return state;
};

export default sidebarReducer;
