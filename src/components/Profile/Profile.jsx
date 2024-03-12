import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileBox}>
      <div>
        <img
          className={css.profileImg}
          src={image}
          width="48"
          alt="User avatar"
        />
        <p className={css.profileTitle}>{name}</p>
        <p className={css.profileText}>{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span>Followers</span>
          <br></br>
          <span>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span>Views</span>
          <br></br>
          <span>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span>Likes</span>
          <br></br>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
