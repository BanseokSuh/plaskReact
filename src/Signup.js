import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3095/api/users/join", {
        email,
        username,
        password,
        mobile,
      })
      .then(() => {
        history.push("/sign-in");
      });
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getUsername = (e) => {
    setUsername(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const getMobile = (e) => {
    setMobile(e.target.value);
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>이메일</label>
          <input type="text" onChange={getEmail} />
        </div>
        <div>
          <label>이름</label>
          <input type="text" onChange={getUsername} />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" onChange={getPassword} />
        </div>
        <div>
          <label>핸드폰번호</label>
          <input type="text" onChange={getMobile} />
        </div>
        <input type="submit" value="회원가입" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  div {
    margin-bottom: 20px;
  }
`;

export default Signup;
