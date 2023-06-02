import { Component } from 'react';
import {toast} from "react-toastify";
import PropTypes from 'prop-types';
import './Searchbar.css';


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
};

    render(){
        return (
<header className='formHeader'>
  <form  className='form' onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
     Search
    </button>

    <input 
    className='formInput'
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}