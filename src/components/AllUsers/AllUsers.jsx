import React from "react";
import s from "./AllUsers.module.css";
import User from "./User/User";

const AllUsers = (props) => {


  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        fullName: 'Trey MacDougal',
        location: {city: 'New-York', country: 'USA'},
        status: 'Drama Queens Rule',
        src: 'https://static.wikia.nocookie.net/sexandthecity/images/3/31/Trey-macdougal.jpg/revision/latest/top-crop/width/150/height/150?cb=20151101173704',
        friends: 5,
        groups: 11
      },
      {
        id: 2,
        followed: false,
        fullName: 'Aidan Shaw',
        location: {city: 'New-York', country: 'USA'},
        status: 'Travel&Co. Business',
        src: 'https://static.wikia.nocookie.net/sexandthecity/images/6/66/Aidan-shaw-1024.jpg/revision/latest/top-crop/width/300/height/300?cb=20110320031208',
        friends: 50,
        groups: 1
      },
      {
        id: 3,
        followed: true,
        fullName: 'Anthony Marantino',
        location: {city: 'New-York', country: 'USA'},
        status: 'Less drama, more prana',
        src: 'https://cdn.images.express.co.uk/img/dynamic/79/285x214/137332_1.jpg',
        friends: 8,
        groups: 13
      },
      {
        id: 4,
        followed: true,
        fullName: 'Heather Graham',
        location: {city: 'New-Jersey', country: 'USA'},
        status: 'What do we have to talk about?',
        src: 'https://www.nydailynews.com/resizer/Y424AN7D5TNp24zx-icy5jmxdGc=/630x630/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/J3DREKQQN4I3RIRO7BAH6VMR4A.jpg',
        friends: 63,
        groups: 77
      }
    ])
  }

  let usersMas = props.users.map(
    u => <User
      key={u.id}
      follow={props.follow}
      unfollow={props.unfollow}
      followOrNot={u.followed}
      id={u.id}
      locationCountry={u.location.country}
      locationCity={u.location.city}
      fullName={u.fullName}
      status={u.status}
      src={u.src}
      friends={u.friends}
      groups={u.groups}
    />
  );

  return (
    <div>
      <div className={s.firstWrap}>
        <div className={s.secondWrap}>
          <h3 className={s.h3}>All users</h3>
        </div>
      </div>
      <main className={s.main}>
        {usersMas}
      </main>
    </div>
  )
};

export default AllUsers;
