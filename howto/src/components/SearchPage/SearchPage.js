import React from 'react';
import { Link } from 'react-router-dom';
import './searchpage.scss';

const SearchPage = () => {
  return (
    <div>
      <section className='title'>
        <div className='search'>
          <label className='inputLabels' htmlFor='Search'>
            <b>Search How To's</b>
          </label>
          <input
            className='inputFields'
            type='text'
            placeholder='Search Here'
            name='Search'
          />
        </div>
      </section>
      <section className='filter'>
        <div className='filterTxt'>
          <h2>Filter search results by:</h2>
        </div>

        <div className='buttons'>
          <button>
            <Link to='/home'>Keyword</Link>
          </button>

          <button>
            <Link to='/profile'>Username</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
