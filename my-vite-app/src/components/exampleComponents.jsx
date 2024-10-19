// src/components/ExampleComponent.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.exampleReducer.data)
  const onClickHandler =()=>{
    dispatch({ type: 'FETCH_DATA' })
  }

 

  return (
    <div>
      <button onClick={onClickHandler}>click to load data</button>
      <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && <p>No data available</p>}
    </div>
   
    </div>
  );
};

export default ExampleComponent;
