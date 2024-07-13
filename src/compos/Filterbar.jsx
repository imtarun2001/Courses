import React from 'react';
import './Filterbar.css';

function Filterbar(props) {
    let filterData = props.filterData;
    let setCategory = props.setCategory;
  return (
    <div className='filter-bar'>
        {
            filterData.map((btnName) => {
            return <button key={btnName.id} className='btn' onClick={() => setCategory(btnName.title)}>{btnName.title}</button>
          })
        }
    </div>
  )
}

export default Filterbar