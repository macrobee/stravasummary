const { REACT_APP_CLIENT_ID } = process.env;
const redirectUrl = "http://localhost:3000/redirect";

const goToAuthPage = () => {
  window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read,activity:read`;
};

const Authentication = () => {

    
  return (
    <div>
      Authenticate here
      <button onClick={goToAuthPage}>Sign in with Strava</button>
    </div>
  );
};
export default Authentication;
