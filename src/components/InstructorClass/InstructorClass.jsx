import { useSelector, useDispatch } from "react-redux";
import "../InstructorDetail/InstructorDetail.css";
import swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function InstructorClass({ session }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const instructorProfile = useSelector((store) => store.instructorProfile);
  const history = useHistory();

  // Handle save class click to direct user to login/register view
  // if user is not logged in, otherwise dispatch "attend class"
  const addClassHandle = () => {
    if (!user.id) {
      history.push("/login");
    } else {
      dispatch({
        type: "ATTEND_CLASS",
        payload: {
          userId: user.id,
          classId: session.classId,
        },
      });

      // Toast notification after saving class
      const Toast = swal.mixin({
        toast: true,
        position: "bottom",
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Saved successfully",
      });
    }
  };

  return (
    <>
      <div className="gym-goer-class">
        <div className="gym-goer-card">
          <div>
            <strong>Activity: </strong>
            {session.activity}
          </div>

          <div>
            <strong>Day: </strong>
            {session.dateOfWeek}
          </div>
          <div>
            <strong>Location: </strong>
            {session.location}
          </div>
          <div>
            <strong>Time: </strong>
            {session.startTime}
          </div>
        </div>

        {/* if user's adminLevel is not an instructor, show the Save Class and Sign Up buttons */}
        {user.adminLevel != "instructor" ? (
          <div className="add-instructor-class">
            <button className="add-class-btn" onClick={addClassHandle}>
              Save Class
            </button>
            <a href={instructorProfile.website} target="_blank">
              <button className="add-class-btn">Sign Up</button>
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
