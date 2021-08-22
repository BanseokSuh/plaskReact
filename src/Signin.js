import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Signin = ({ setIsLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3095/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        // isLogin = true

        setIsLogin(true);
        // save token in localStorage

        console.log(res.data.payload);

        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("userInfo", JSON.stringify(res.data.payload));
        history.push("/");
      });
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <h1>로그인</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>이메일</label>
          <input type="text" onChange={getEmail} />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" onChange={getPassword} />
        </div>
        <input type="submit" value="로그인" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  div {
    margin-bottom: 20px;
  }
`;

export default Signin;
