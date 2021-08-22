import styled from "styled-components";
import axios from "axios";
import Item from "./Item";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("newest");
  const [itemCount, setItemCount] = useState(10);
  let limitCount = 10;
  let orderBy = "newest"; // highest, lowest, newest, starCount
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const getOption = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.value) {
      case "최신순":
        orderBy = "newest";
        break;
      case "별점순":
        orderBy = "starCount";
        break;
      case "낮은가격순":
        orderBy = "lowest";
        break;
      case "높은가격순":
        orderBy = "highest";
        break;
    }
    setOption(orderBy);
  };

  const getItemCount = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.value) {
      case "10개씩":
        limitCount = 10;
        break;
      case "20개씩":
        limitCount = 20;
        break;
      case "30개씩":
        limitCount = 30;
        break;
      case "40개씩":
        limitCount = 40;
        break;
    }
    setItemCount(limitCount);
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:3095/api/items/orderby?limitCount=${itemCount}&orderBy=${option}`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [option, itemCount]);

  return (
    <Container>
      <select onChange={getOption}>
        <option>최신순</option>
        <option>별점순</option>
        <option>낮은가격순</option>
        <option>높은가격순</option>
      </select>
      <select onChange={getItemCount}>
        <option>10개씩</option>
        <option>20개씩</option>
        <option>30개씩</option>
        <option>40개씩</option>
      </select>
      {userInfo && (
        <div>
          <div>{userInfo.username}</div>
          <div>{userInfo.email}</div>
          <div>{userInfo.mobile}</div>
        </div>
      )}
      {/* {userInfo ? <span>userInfo.username</span> : ""} */}
      <List>
        {data?.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div``;
const List = styled.ul``;

export default Home;
