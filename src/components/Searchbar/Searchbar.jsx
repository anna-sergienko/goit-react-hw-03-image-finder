import { Component } from 'react';
import {toast} from "react-toastify";
import PropTypes from 'prop-types';
import {FormHeader, SearchForm, SearchFormButton, FormInput} from './Searchbar.styled';


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
<FormHeader>
  <SearchForm onSubmit={this.handleSubmit}>
    <SearchFormButton type="submit" >
     Search
    </SearchFormButton>

    <FormInput
      type="text"
      autoComplete="off"
      value={this.state.searchingName}
      onChange={this.handleNameChange}
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</FormHeader>
        )
    }
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}