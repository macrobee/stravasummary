import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        Navigation bar: <Link to={`/authentication`}>auth</Link> |{" "}
        <Link to={`/profile`}>profile</Link> | bike | run | swim
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
