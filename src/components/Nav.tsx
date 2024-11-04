// navbar boilerplate used from activity 28
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  // use 'useLocation' to get the current path and save it as a variable
  const currentPage = useLocation().pathname;

  // display the navigation bar and link between the pages
  return (
    <nav className="nav">
      <p className="nav-item">
        {/* link to react router */}
        <Link
          to="/"
          // depending on the current page, the link will have an 'active' tag to the className for css targeting
          className={currentPage === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </p>
      <p className="nav-item">
        <Link
          to="/SavedCandidates"
          className={
            currentPage === "/SavedCandidates" ? "nav-link active" : "nav-link"}>
          Potential Candidates
        </Link>
      </p>
    </nav>
  );
};

export default Nav;
