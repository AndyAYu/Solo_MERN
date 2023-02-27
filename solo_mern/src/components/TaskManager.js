// TaskManager.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      due_date: '',
      priority: '',
      completed: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      description: this.state.description,
      due_date: this.state.due_date,
      priority: this.state.priority,
      completed: this.state.completed
    };

    axios
      .post('http://localhost:8081/api/tasks', data)
      .then(res => {
        this.setState({
          title: '',
          description: '',
          due_date: '',
          priority: '',
          completed: false
        })
        this.props.history.push('/show-task/'+res.data._id);
      })
      .catch(err => {
        console.log("Error in CreateTask!");
      })
  };

  render() {
    return (
      <div className="CreateTask">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Task List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Task</h1>
              <p className="lead text-center">
                Create new task
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <label htmlFor="title">Title</label>
                  <input
                    type='text'
                    placeholder='Title of the Task'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <label htmlFor="description">Description</label>
                  <input
                    type='text'
                    placeholder='Describe this task'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <label htmlFor="due_date">Due Date</label>
                  <input
                    type='date'
                    placeholder='Due Date'
                    name='due_date'
                    className='form-control'
                    value={this.state.due_date}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <label htmlFor="priority">Priority</label>
                  <input
                    type='text'
                    placeholder='Priority'
                    name='priority'
                    className='form-control'
                    value={this.state.priority}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <label htmlFor="completed">Completed</label>
                  <input
                    type='text'
                    placeholder='Completed'
                    name='completed'
                    className='form-control'
                    value={this.state.completed}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <input type="submit" className="btn btn-outline-warning btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskManager;