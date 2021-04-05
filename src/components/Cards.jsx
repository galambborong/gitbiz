import Chart from './Chart';

const Cards = ({ user }) => {
  const {
    login,
    avatar_url,
    bio,
    location,
    hireable,
    company,
    twitter_username,
    followers,
    blog,
    repos_url
  } = user;
  const proDetails = [location, hireable, company];
  const hasProDetails = proDetails.some((detail) => {
    return detail !== null;
  });
  const socialDetails = [twitter_username, followers, blog];
  const hasSocialDetails = socialDetails.some((detail) => {
    return detail !== null;
  });

  return (
    <article className="card">
      <h3 className="card__username">{login}</h3>
      <img src={avatar_url} alt={login} className="card__img"></img>
      <p className="card__bio">{bio}</p>
      <div className="card__pro-details">
        {hasProDetails && <h4>Professional</h4>}
        <ul className="pro-list">
          {location && (
            <li>
              <i className="fas fa-map-marked-alt"></i>
              {location}
            </li>
          )}
          {hireable && (
            <li>
              <i className="fas fa-laptop-code"></i>Looking for work
            </li>
          )}
          {company && (
            <li>
              <i className="fas fa-building"></i>
              {company}
            </li>
          )}
        </ul>
      </div>
      <div id="card__social-details">
        {hasSocialDetails && <h4>Social</h4>}
        <ul className="social-list">
          {twitter_username && (
            <li>
              <i className="fab fa-twitter"></i>
              <a href={`https://www.twitter.com/${twitter_username}`}>
                @{twitter_username}
              </a>
            </li>
          )}
          {followers && (
            <li>
              <i className="fab fa-github"></i>
              {followers} followers on Github
            </li>
          )}
          {blog && (
            <li>
              <i className="fas fa-blog"></i>
              <a href={blog}>Personal Website</a>
            </li>
          )}
        </ul>
      </div>
      <Chart repos_url={repos_url} />
    </article>
  );
};

export default Cards;
