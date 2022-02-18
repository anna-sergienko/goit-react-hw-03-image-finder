import { Component } from 'react';
import {toast} from "react-toastify";
// import styled from '@emotioxn/styled';
// import "./Searchbar.css";


class Searchbar extends Component {

state={
  searchingName: '',
}

handleNameChange = evt =>{
this.setState({searchingName: evt.target.value.toLowerCase()});
}

handleSubmit = evt =>{
    evt.preventDefault();
if(this.state.searchingName.trim() === ""){
    return toast("Enter name, please!");
}

    this.props.onSubmit(this.state.searchingName);
    // this.setState({searchingName: ""});
};

    render(){
        return (
<header className="Searchbar">
  <form className="SearchForm" onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
     Search
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      value={this.state.searchingName}
      onChange={this.handleNameChange}
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
};

export default Searchbar;