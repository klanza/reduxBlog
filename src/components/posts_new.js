import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'


class PostsNew extends Component {
  renderField(field) {
    // Destructuring
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
        className="form-control"
        type="text"
        {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  // When hitting APIs think in action creators
  onSubmit(values) {
    // this === component
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          // reference to function only, no parentheses. Field will call that function at some point
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />

        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  
  const errors = {};

  // Validate the inputs from 'values'

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories.";
  }
  if (!values.content) {
    errors.content = "Enter some content please."
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* propertires, redux-form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost }) (PostsNew)
);
