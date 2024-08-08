import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function TableData() {
  const [data, setData] = useState([]);
  const [totalCartValue, setTotalCartValue] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    totalCalculation();
  }, [data]);

  const totalCalculation = () => {
    const total = data.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
    setTotalCartValue(total);
  };
  const fetchData = async () => {
    const { data, status } = await axios.get(
      "https://fakestoreapi.com/products"
    );
    console.log(data, "datadata");

    if (status === 200) {
      const newData = data.map((each) => {
        return { ...each, quantity: 1 };
      });
      totalCalculation();
      console.log(newData, "newData");
      setData(newData);
    }
  };

  const incrementHandler = (targetId) => {
    console.log(targetId);

    const newFilteredData = data.map((each) => {
      if (each.id === targetId) {
        return { ...each, quantity: each.quantity + 1 };
      } else {
        return each;
      }
    });

    setData(newFilteredData);
  };

  const decrementHandler = (id) => {};
  return (
    <Table striped bordered hover>
      <h3>{totalCartValue}</h3>
      <thead>
        <tr>
          <th>Serial No</th>
          <th>Product Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.length > 0 &&
          data.map((eachData) => (
            <tr>
              <td>{eachData.id}</td>
              <td>{eachData.title}</td>
              <td>{eachData.category}</td>
              <td>{eachData.price}</td>
              <td>
                <button onClick={() => decrementHandler(eachData.id)}>-</button>
                {eachData.quantity}
                <button onClick={() => incrementHandler(eachData.id)}>+</button>
              </td>
              <td>{eachData.quantity * eachData.price}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TableData;
