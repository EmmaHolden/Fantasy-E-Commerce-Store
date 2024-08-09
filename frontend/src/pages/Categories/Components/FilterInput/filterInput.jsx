import { useContext, useState } from 'react';
import "./filterInput.css";
import { StockContext } from '../../../../context/StockProvider';
import Button from '../../../../components/Button/button';

const FilterInput = () => {

  const [query, setQuery] = useState('')
  const [stock, setStock] = useContext(StockContext);

  const clearSearch = () => {
    let newItems = [...stock]
    {
      newItems.map((item) => {
        item.visible = true;
      })
    }
    setStock(newItems)
    setQuery('')
  }

  const handleQueryChange = (event) => {

    let queryText = event.target.value;
    let newItems = [...stock]
    newItems.map((item, index) => {
      item.visible = item.name.toLowerCase().includes(queryText.toLowerCase());
    })
    setStock(newItems)
    setQuery(queryText)
  }

  
  return (
    <div className="filter-input-container">
      <div className="filter-input-with-button">
        <div>
            <input
              name="filter-items"
              type="text"
              value={query}
              onChange={(event) => handleQueryChange(event)} 
              placeholder = "Search"
              maxLength = "10"/>
        </div>
        <div>
          {query != '' ?
            <Button variant="clear" onClick={() => clearSearch()}>X</Button>
            : ""}

        </div>
      </div>
    </div>
  );
};

export default FilterInput;