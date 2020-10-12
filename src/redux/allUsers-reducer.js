const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   fullName: 'Trey MacDougal',
    //   location: {city: 'New-York', country: 'USA'},
    //   status: 'Drama Queens Rule',
    //   src: 'https://static.wikia.nocookie.net/sexandthecity/images/3/31/Trey-macdougal.jpg/revision/latest/top-crop/width/150/height/150?cb=20151101173704'
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   fullName: 'Aidan Shaw',
    //   location: {city: 'New-York', country: 'USA'},
    //   status: 'Travel&Co. Business',
    //   src: 'https://static.wikia.nocookie.net/sexandthecity/images/6/66/Aidan-shaw-1024.jpg/revision/latest/top-crop/width/300/height/300?cb=20110320031208'
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   fullName: 'Anthony Marantino',
    //   location: {city: 'New-York', country: 'USA'},
    //   status: 'Less drama, more prana',
    //   src: 'data:image/jpeg;base64,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'
    // },
    // {
    //   id: 4,
    //   followed: true,
    //   fullName: 'Heather Graham',
    //   location: {city: 'New-Jersey', country: 'USA'},
    //   status: 'What do we have to talk about?',
    //   src: 'https://www.nydailynews.com/resizer/Y424AN7D5TNp24zx-icy5jmxdGc=/630x630/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/J3DREKQQN4I3RIRO7BAH6VMR4A.jpg'
    // }
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
