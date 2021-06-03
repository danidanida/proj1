import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/CourseActions";
import * as authorActions from "../../redux/actions/AuthorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    if (this.props.courses.length === 0) {
      this.props.actions.loadCourses().catch((err) => {
        alert("Loading courses failed " + err);
      });
    }
    if (this.props.authors.length === 0) {
      this.props.actions.loadAuthors().catch((err) => {
        alert("Loading authors failed " + err);
      });
    }
  }
  /* constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    //this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  };*/

  render() {
    return (
      /*<form onSubmit={this.handleSubmit}>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
    <input type="submit" value="Save" />
          </form>
  */
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  //createCourse: PropTypes.func.isRequired,
  //dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.lenght === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions.loadCourses, dispatch),
    authors: bindActionCreators(authorActions.loadAuthors, dispatch),
  };
}

/*const mapDispatchToProps = { // mapDispatchToProps as an object
  createCourse: courseActions.createCourse
}*/

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
