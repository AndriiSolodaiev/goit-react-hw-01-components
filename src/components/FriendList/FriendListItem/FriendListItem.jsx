import css from 'components/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, isOnline }) {
  return (<li className={css.item}>
    <span
      className={`${css.status} ${isOnline ? css.online : css.offline}`}
    ></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>)
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
