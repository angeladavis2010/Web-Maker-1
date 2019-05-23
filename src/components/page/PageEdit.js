import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

export default class PageEdit extends Component {

    state = {
        uid: "",
        wid: "",
        pid: "",
        name: "",
        title: ""
    }
    async componentDidMount() {
      await this.setState({
          uid: this.props.match.params.uid,
          wid: this.props.match.params.wid,
          pid: this.props.match.params.pid
      })
      this.getPage();
  }

  getPage = async () => {
      const res = await axios.get(`/api/page/${this.state.pid}`)
      this.setState({
        name: res.data.name,
        title: res.data.title
    })  
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  onDelete = async () => {
    await axios.delete(`/api/page/${this.state.pid}`);   
    this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/pages`)
  }

  onSubmit = async e => {
    e.preventDefault();
    const newPage = {
      _id: this.state.pid,
      name: this.state.name,
      websiteId: this.state.wid,
      title: this.state.title
    }
    await axios.put("/api/page", newPage);
    this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/pages`) 
  }

  render() {
       const {uid, wid, name, title} = this.state
    return (
      <div>
         <nav className="navbar fixed-top navbar-light bg-light">
                <Link className="color-black" to={`/user/${uid}/website/${wid}/page`}>
                  <i className="fas fa-chevron-left"></i>
                </Link>              
                <span className="navbar-brand mb-0 h1">
                  Edit Page
                </span>
                <button className="color-black btn" form="editPageForm">
                    <i className="fa fas-check" />
                </button>
            </nav>
            
         <div className="container">
             <form id="editPageForm" onSubmit={this.onSubmit}>
                 <div className="form-group">
                     <label htmlFor="form-group">
                        <b>Name</b>
                      </label>
                      <input
                          classNamew= "form-control"
                          id="name"
                          name="name"
                          onChange={this.onChange}
                          type="text"
                          placeholder="Nmae of the page..."
                          value={name}
                      />
                    </div>
                    <div classNmae="form-group">
                         <label htmlFor="title">
                              <b>Title</b>
                         </label>
                         <input
                              className="form-control"
                              type="text"
                              id="title"
                              name="title"
                              onChange={this.onChange}
                              placeholder="Title of the page..."
                              value={title}
                          />


                    </div>    
                    </form>
        </div>
        <nav className="navbar navbar-light fixed-bottom bg-light">
            <div className="full-width">
                <a className="float-right" href="../user/profile.html"><i className="fas fa-user"></i></a>

            </div>
        </nav>   
      </div>
    )
  }
}
