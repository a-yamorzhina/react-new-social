const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: 'Trey MacDougal',
      location: {city: 'New-York', country: 'USA'},
      status: 'Drama Queens Rule',
      src: 'https://static.wikia.nocookie.net/sexandthecity/images/3/31/Trey-macdougal.jpg/revision/latest/top-crop/width/150/height/150?cb=20151101173704'
    },
    {
      id: 2,
      followed: false,
      fullName: 'Aidan Shaw',
      location: {city: 'New-York', country: 'USA'},
      status: 'Travel&Co. Business',
      src: 'https://static.wikia.nocookie.net/sexandthecity/images/6/66/Aidan-shaw-1024.jpg/revision/latest/top-crop/width/300/height/300?cb=20110320031208'
    },
    {
      id: 3,
      followed: true,
      fullName: 'Anthony Marantino',
      location: {city: 'New-York', country: 'USA'},
      status: 'Less drama, more prana',
      src: 'https://cdn.images.express.co.uk/img/dynamic/79/285x214/137332_1.jpg'
    },
    {
      id: 4,
      followed: true,
      fullName: 'Heather Graham',
      location: {city: 'New-Jersey', country: 'USA'},
      status: 'What do we have to talk about?',
      src: 'https://www.nydailynews.com/resizer/Y424AN7D5TNp24zx-icy5jmxdGc=/630x630/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/J3DREKQQN4I3RIRO7BAH6VMR4A.jpg'
    }
  ]
};


const allUsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FOLLOW: {
        return {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return {...u, followed: true}
            }
            return u;
          }),
        }
      }
      case UNFOLLOW: {
        return {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return {...u, followed: false}
            }
            return u;
          }),
        }
      }
      case SET_USERS: {
        return {...state, users: [...state.users, ...action.users]}
      }
      default:
        return state;
    }
  }
;

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});

export default allUsersReducer;
