import { useLocation, useNavigate, useParams } from "react-router-dom";

/**
 * Custom withRouter component for verifing login as withRouter is not available in newer
 * version of react-router-dom
 */
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter;
