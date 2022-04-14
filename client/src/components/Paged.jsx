import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setPage} from '../redux/actions.js';
import styles from '../styles/paged.module.css';


export default function Paged () {
  const dispatch = useDispatch();
  const {countriesModifed, page} = useSelector(state => state);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countriesModifed.length/9); i++) {
    pageNumbers.push(i)
  }

  const changePage = (pageNum) => {
    dispatch(setPage(pageNum))
  }

  return (
    <nav>
      <ul  className={styles.paged}>
        {
          pageNumbers && pageNumbers.map((num,i) => (
            <li className={styles.item} key={'li'+ i}>
              <p className={page === num ? styles.numSelect : styles.num} key={'b'+ i}  onClick={() => changePage(num)}>{num}</p>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
