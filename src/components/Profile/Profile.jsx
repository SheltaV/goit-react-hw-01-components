import { UserName, ProfileList, Section, ProfileInfo } from './Profile.styled';
import PropTypes from 'prop-types';


export const Profile = ({username, tag, location, avatar, stats}) => {
    return <Section>
  <ProfileInfo>
    <img
      src={avatar}
      alt="User avatar"
      width="250"
    />
    <UserName>{username}</UserName>
    <p>@{tag}</p>
    <p>{location}</p>
  </ProfileInfo>

  <ProfileList>
    <li>
      <p>Followers</p>
      <p>{stats.followers}</p>
    </li>
    <li>
      <p>Views</p>
      <p>{stats.views}</p>
    </li>
    <li>
      <p>Likes</p>
      <p>{stats.likes}</p>
    </li>
  </ProfileList>
</Section>
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
  })
}