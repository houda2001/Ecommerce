import styled from 'styled-components'
import React from 'react'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Info=styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
transition:all 0.5 ease;
`;
const Container=styled.div`
flex:1;
margin:5px;
min-width:200px;
height:350px;
display:flex;
align-items:center;
justify-content:center;

position:relative;
  &:hover ${Info}{
  opacity:1;   
  }
 
`;
const Image=styled.img`
height:75%;
z-index:2;
border-radius:10%;
`;


const Icon=styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:8px;
pointer:cursur;
transition:all 0.5s ease;
&:hover{background-color:#e9f5f5;
  transform:scale(1.1);
}
`;

const Product = ({item}) => {
    return (
      <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
    )
}

export default Product
