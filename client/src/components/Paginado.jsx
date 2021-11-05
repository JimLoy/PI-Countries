import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setPage} from '../redux/actions.js';


export default function Paginado () {
  const dispatch = useDispatch();
  const {countriesModifed} = useSelector(state => state);


  const changePage = (pageNum) => {
    dispatch(setPage(pageNum))
  }


  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countriesModifed.length/9); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul>
        {
          pageNumbers && pageNumbers.map((num,i) => (
              <li key={'li'+ i}>
                <button key={'b'+ i} onClick={() => changePage(num)}>{num}</button>
              </li>
          ))
        }
      </ul>
    </nav>
  )
}
