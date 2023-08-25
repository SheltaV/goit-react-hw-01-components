import { UserName, ProfileList, Section, ProfileInfo } from './Profile.styled';
// import PropTypes from 'prop-types';


export const Profile = ({items}) => {
    return <Section>
  <ProfileInfo>
    <img
      src={items.avatar}
      alt="User avatar"
      width="250"
    />
    <UserName>{items.username}</UserName>
    <p>@{items.tag}</p>
    <p>{items.location}</p>
  </ProfileInfo>

  <ProfileList>
    <li>
      <p>Followers</p>
      <p>{items.stats.followers}</p>
    </li>
    <li>
      <p>Views</p>
      <p>{items.stats.views}</p>
    </li>
    <li>
      <p>Likes</p>
      <p>{items.stats.likes}</p>
    </li>
  </ProfileList>
</Section>
}

// Profile.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired
// }