import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;

const HeaderTop = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 20px;
`;

const SearchBox = styled.div`
  & > input {
    width: 150px;
    padding: 4px 6px;
    border: none;
    border-bottom: 1px solid #000;
    &::placeholder {
      padding-left: 10px;
      opacity: 1;
      transition: opacity 0.3s;
    }

    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const Logo = styled.div`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;

  & > a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MenuArea = styled.div`
  & ul {
    display: flex;
    gap: 20px;
  }
`;

const LoginAuth = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

const menuList = [
  "여성",
  "추천",
  "브랜드",
  "발매",
  "랭킹",
  "세일",
  "무탠 슈퍼세일",
];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const onCheckEnter = (e) => {
    console.log(e);
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };

  return (
    <Wrapper>
      <HeaderTop>
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyUp={onCheckEnter} />
        </SearchBox>
        {authenticate ? (
          <LoginAuth onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </LoginAuth>
        ) : (
          <LoginAuth onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuth>
        )}
      </HeaderTop>
      <Logo>
        <Link to={"/"}>
          <img src="https://www.shinailbo.co.kr/news/photo/202106/1419496_624961_3416.jpg" />
        </Link>
      </Logo>
      <MenuArea>
        <ul>
          {menuList.map((menu, idx) => (
            <li key={idx}>
              <a href="">{menu}</a>
            </li>
          ))}
        </ul>
      </MenuArea>
    </Wrapper>
  );
};

export default Navbar;
