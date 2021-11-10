import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setPage} from '../redux/actions.js';
import styles from '../styles/paged.module.css';


export default function Paged () {
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
      <ul  className={styles.paged}>
        {
          pageNumbers && pageNumbers.map((num,i) => (
              <li className={styles.item} key={'li'+ i}>
                <a className={styles.num} key={'b'+ i} href=' ' onClick={() => changePage(num)}>{num}</a>
              </li>
          ))
        }
      </ul>
    </nav>
  )
}
