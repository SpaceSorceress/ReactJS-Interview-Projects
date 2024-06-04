import PropTypes from "prop-types";

export default function UserCard({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="gs-user">
      <div>
        <img src={avatar_url} className="gs-avatar" alt="User" />
      </div>
      <div className="gs-name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
      <p>
        User joined on:{" "}
        {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
          month: "short",
        })} ${createdDate.getFullYear()}`}
      </p>
      <div className="gs-profile-info">
        <p>Public Repos: {public_repos}</p>

        <p>Followers: {followers}</p>

        <p>Following: {following}</p>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.object,
};
