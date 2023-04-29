import React, { useContext, useEffect, useState } from "react";
import "./Basket.css";
import CloseIcon from "@mui/icons-material/Close";
import { Contexts } from "../Context/Context";
import DeleteIcon from '@mui/icons-material/Delete';

const Basket = () => {
    const [total, setTotal] = useState(0)

    const { setShow, state, dispatch } = useContext(Contexts);
    console.log();

    const removeProduct = (dataid) => {
      dispatch({type: 'REMOVE_PRODUCT', payload: dataid})
    }

    const changePlyus = (id) => {
      const res = state.basket.find(elem => {
        if(elem.data.id === id) {
          let reply = elem.count + 1
          dispatch({type: 'CHANGE_PLYUS', payload: {reply, id: elem.data.id}})
        }
      });
    }
    const changeMinus = (id) => {
      const res = state.basket.find(elem => {
        if(elem.data.id === id) {
          let reply = elem.count - 1
          dispatch({type: 'CHANGE_MINUS', payload: {reply, id: elem.data.id}})
        }
      });
    }

    useEffect(() => {
      state.basket?.length && setTotal(state.basket.reduce((prev, current) => prev + current.data.price * current.count, 0))
    }, [state])

  return (
    <div className="basket">
      <div className="topBasket">
        <CloseIcon onClick={() => setShow(false)} />
        <h1>Basket</h1>
        { state.basket?.length ? state.basket.map((item => (
          <div className="box">
            <h2>{item.count}</h2>
          <div className="images">
            <img src={item.data.image} alt="" />
          </div>
          <div className="text">
            <h2>{item.data.title.slice(0, 15) + '...'}</h2>
            <p>{item.data.price}</p>
          </div>
          <div className="setting">
            <button onClick={() => changePlyus(item.data.id)}>+</button>
            <button onClick={() => changeMinus(item.data.id)}>-</button>
            <button onClick={() => removeProduct(item.data.id)}><DeleteIcon style={{color: 'red', alignItems: 'center'}} /></button>
          </div>
        </div>
        ))) : <h2>Hech narsa yoq</h2> }
      </div>
      <div className="bottomBasket">
        <h4>
          Summa : <span>{total.toLocaleString('uz-UZ', {
            style: 'currency',
            currency: 'uzs'
          })}</span>
        </h4>
        <button>Sotib olish</button>
      </div>
    </div>
  );
};

export default Basket;
