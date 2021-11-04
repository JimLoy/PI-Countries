import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, setPage} from '../redux/actions';



export default function Orders() {
  const [input, setInput] = React.useState({});
  const dispatch = useDispatch();
  const { name } = useSelector(state=> state);


  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(getAllVideogames({name, page:1, origin: input.origin, order: input.order, rating: input.rating}));
    dispatch(setPage(1));
    dispatch(setOrdersAndFilter({origin: input.origin, order: input.order, rating: input.rating}));
    setInput({})
  };

  const handleFilterAndOrder = (e) => {
    e.preventDefault();
    setInput({...input, [e.target.name]: e.target.value});
  };


  return (
    <select onChange={e => handleFilterAndOrder(e)} name='order'>
      <option value=''>None</option>
      <option value='asc'>A-Z</option>
      <option value='desc'>Z-A</option>
    </select>
  )
}
