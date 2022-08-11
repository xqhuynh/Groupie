import React, { useEffect, useState } from "react";
import "./InstructorDetail.css";
import InstructorProfile from "./InstructorProfile";
import instructorClasses from "../InstructorClass/InstructorClasses";
import InstructorClass from "../InstructorClass/InstructorClass";
import InstructorTags from "./InstructorTags";
// import InstructorAbout from "./InstructorAbout";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

function InstructorDetail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch instructor profile on page load
  useEffect(() => {
    dispatch({ type: "FETCH_INSTRUCTOR_PROFILE", payload: params.id });
    // Fetch instructor classes on page load
    dispatch({
      type: "FETCH_INSTRUCTOR_CLASSES",
      payload: params.id,
    });
    // Fetch instructor tags on page load
    dispatch({ type: "FETCH_INSTRUCTOR_TAGS", payload: params.id });
    //
  }, [params.id]);

  // Redux store
  const profile = useSelector((store) => store.instructorProfile);
  const classes = useSelector((store) => store.instructorClasses);
  const tags = useSelector((store) => store.instructorTags);
  const imTags = useSelector((store) => store.search.tags);
  const user = useSelector((store) => store.user);
  console.log("Array:", imTags);

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="Universal-Container">
      <h3 className="instructor-details-header"> Instructor Details </h3>

      <button className="go-back view-more-btn" onClick={handleClick}>
        Back
      </button>

      <div>
        <div className="profile">
          <InstructorProfile profile={profile} instructor={params.id} />
        </div>
        <h3 className="instructor-view-header"> Classes </h3>

        <div className="ic-card">
          {/* conditional render add icon if adminLevel is instructor */}
          {user.adminLevel === "instructor" && user.id === Number(params.id) ? (
            <div>
              <AddIcon />
            </div>
          ) : (
            <></>
          )}

          {/* Map over instructor classes and pass prop to InstructorClass component */}
          {classes &&
            classes.map((session, i) => (
              <InstructorClass key={i} session={session} />
            ))}
        </div>
        <h3 className="instructor-view-header">Tags</h3>
        <div className="tags">
          <InstructorTags tags={tags} />
        </div>
      </div>
      <div>
        <h3 className="instructor-detail-about-header">About</h3>
        <p>{profile.about}</p>
      </div>
    </div>
  );
}

export default InstructorDetail;
