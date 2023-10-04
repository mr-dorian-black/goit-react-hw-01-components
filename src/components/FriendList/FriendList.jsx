import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
     return <ul className={css['friend-list']}>
          {friends.map(({ avatar, name, isOnline, id }) => {
               return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
          })}
     </ul>
}