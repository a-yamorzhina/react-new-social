export const getUsers = (state) => {
  return state.allUsersPage.users;
};

export const getPageSize = (state) => {
  return state.allUsersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.allUsersPage.totalUsersCount;
};


export const getCurrentPage = (state) => {
  return state.allUsersPage.currentPage;
};


export const getIsFetching = (state) => {
  return state.allUsersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.allUsersPage.followingInProgress;
};
