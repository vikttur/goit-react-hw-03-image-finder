import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { ReactComponent as MagnificationGlass } from '../../images/magnificationGlass.svg';
import css from './Searchbar.module.css';

export default function Searchbar(onSubmit) {
  return (
    <header className={css.searchBar}>
      <form className={css.searchForm}>
        <Button type="submit" className={css.button} onClick={onSubmit}>
          <MagnificationGlass />
        </Button>

        <input
          className={css.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
