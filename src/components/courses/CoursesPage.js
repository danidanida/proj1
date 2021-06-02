import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/CourseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
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
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  //createCourse: PropTypes.func.isRequired,
  //dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch),
  };
}

/*const mapDispatchToProps = { // mapDispatchToProps as an object
  createCourse: courseActions.createCourse
}*/

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
