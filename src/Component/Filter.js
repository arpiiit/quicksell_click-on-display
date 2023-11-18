// Filter.js
import React, { useState } from 'react';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';

const Filter = ({ onGroupingChange, onSortingChange, onDisplayClick }) => {
  const [selectedGrouping, setSelectedGrouping] = useState('Grouping');
  const [selectedSorting, setSelectedSorting] = useState('Sorting');

  const handleGroupingItemClick = (option) => {
    setSelectedGrouping(option);
    onGroupingChange(option);
  };

  const handleSortingItemClick = (option) => {
    setSelectedSorting(option);
    onSortingChange(option);
  };

  return (
    <div>
       <Button variant="primary" onClick={onDisplayClick}>
        Display
      </Button>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="info" id="grouping-dropdown">
          {selectedGrouping}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleGroupingItemClick('user')}>User</Dropdown.Item>
          <Dropdown.Item onClick={() => handleGroupingItemClick('status')}>Status</Dropdown.Item>
          <Dropdown.Item onClick={() => handleGroupingItemClick('priority')}>Priority</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="info" id="sorting-dropdown">
         {selectedSorting}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          
          <Dropdown.Item onClick={() => handleSortingItemClick('priority')}>Priority</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortingItemClick('title')}>Title</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      

     
    </div>
  );
};

export default Filter;
