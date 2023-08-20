import { useState } from 'react';
import './style.css';
import {filters} from './filters.js'
import {items} from './items.js'

const Item = ({name, category}) => {
  return (
      <div className="item" data-testid={`${name}`}>
        <p>{name}</p>
        <p className="category">{category}</p>
      </div>
  )
};

const FilterButton = ({filter, onClick, isActive}) => {
  return (
    <button 
      className={`button ${isActive ? 'active' : ''}`} 
      onClick={() => onClick(filter)} 
      data-testid={`${filter}-button`}
      >
      {filter}
    </button>
  );
}

export default function Solution() {
  const [activeFilters, setActiveFilters] = useState([]);

  const itemMatchesFilter = (item) => {
    if(activeFilters.length === 0) {
      return true;
    }
    return activeFilters.includes(item.category);
  }
  
  const filteredItems = items.filter(itemMatchesFilter);

  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters((prevFilters) => 
        prevFilters.filter((prevFilter) => prevFilter !== filter));
    } else {
      setActiveFilters((prevFilters) => [...prevFilters, filter]);
    }
  };

  
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Multiple Filters</h2>
      <div className="button-container">
        {filters.map((filter) => (
      <FilterButton
        key={filter} 
        filter={filter} 
        onClick={toggleFilter} 
        isActive={activeFilters.includes(filter)}
        />
      ))}
      </div>
      <div className="items-container">
        {filteredItems.map((item) => (
      <Item 
        key={item.name} 
        name={item.name} 
        category={item.category} />
      ))}
      </div>
    </div>
  );
}
