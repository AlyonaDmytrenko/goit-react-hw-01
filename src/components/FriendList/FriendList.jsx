import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friends => {
        return (
          <li className={css.friendsListItem} key={friends.id}>
            <FriendListItem />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
