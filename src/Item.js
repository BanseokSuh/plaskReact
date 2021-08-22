import styled from "styled-components";

const Item = ({ data }) => {
  return (
    <Container>
      <Image>
        <img src={data.imgPath} alt={data.name} />
      </Image>
      <Info>
        <h1>{data.name}</h1>
        <p>{data.detail}</p>
        <p>{data.price}</p>
        {/* for (let i = 0; i < {Number(data.starCount)}; i++) {
					<span>ㅇ</span>
				} */}
        <span>{Number(data.starCount)}</span>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  padding: 10px;
`;
const Image = styled.div`
  width: 240px;
  height: 240px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const Info = styled.div``;

export default Item;

// createdAt: "2021-08-21T08:48:16.810Z"
// deletedAt: null
// detail: "아이템입니다. 좋아요."
// id: 1
// imgPath: "http://localhost:3095/uploads/IMG_0677.JPG"
// name: "itemname1"
// price: 10000
// starCount: "5"
// updatedAt: "2021-08-21T08:48:16.810Z"
