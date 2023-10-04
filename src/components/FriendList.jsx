import css from '../css/FriendList.module.css'

export const FriendList = ({ friends }) => {
     return <ul className={css['friend-list']}>
          {friends.map(friend => {
               let { avatar, name, isOnline, id } = friend;
               return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
          })}
     </ul>
}

const FriendListItem = ({ avatar, name, isOnline }) => {
     let onlineStatus = isOnline ? 'online' : 'offline'
     return <li className={css.item}>
          <span className={css[onlineStatus]}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{ name }</p>
     </li>
}