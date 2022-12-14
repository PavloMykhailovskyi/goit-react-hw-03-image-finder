import { Component } from "react";
import Notiflix from "notiflix";
import { BiSearch } from 'react-icons/bi';
import css from './SearchBar.module.css'
import PropTypes from 'prop-types'

export class SearchBar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    const { search } = this.state;
      e.preventDefault();

      if (search.trim() === '') {
          Notiflix.Notify.warning('Please enter your quest word');
          return
      }
      this.props.onSubmit(search);
      this.setState({ search: '' });
  };

  render() {
    return (
      <div>
        <header className={css.searchBar}>
          <form className={css.searchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.searchForm_button}>
              <BiSearch size={22} />
              <span className={css.searchForm_button_label}></span>
            </button>

            <input
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}