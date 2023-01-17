import { UserSummaryDiv } from "./usersummary.styles";
const UserSummary = ({ user }) => {
  const { id, firstname, lastname, sex, profile } = user;
  return (
    <>Here's your data
    <UserSummaryDiv>
      
      <img src={profile} alt="your profile" />
      <div className="user-summary-text-content">
          <h2>User #{id}</h2>
          <p>
            Name: {firstname} {lastname}
          </p>
          <p>Gender: {sex}</p>
      </div>
      
    </UserSummaryDiv>
    </>
  );
};
export default UserSummary;
