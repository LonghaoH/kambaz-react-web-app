import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3520/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cpp.jpg" width={200} />
            <div>
              <h5> CS3520 C++ </h5>
              <p className="wd-dashboard-course-title">
                Programming in C++  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1122/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/java.jpg" width={200} />
            <div>
              <h5> CS1122 Java </h5>
              <p className="wd-dashboard-course-title">
                Programming in Java  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4321/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5> CS4321 Python </h5>
              <p className="wd-dashboard-course-title">
                Programming in Python  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/webdev.jpg" width={200} />
            <div>
              <h5> CS4550 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Web Development  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4530/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/sweng.jpg" width={200} />
            <div>
              <h5> CS4530 Software Engineering </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals to Software Engineering  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3650/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/systems.jpg" width={200} />
            <div>
              <h5> CS3650 Systems </h5>
              <p className="wd-dashboard-course-title">
                Computer Systems  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
