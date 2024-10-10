import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { styled, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./routes/PrivateRoute";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          ),
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// 간단한 쇼핑몰 레이아웃 생성
// - 로그인 페이지 (*Protected Router Page)
// json server 사용!!

// Redux

// ProductAll
// Login
// ProductDetail

// 컴포넌트 속성
// Navbar
// ProductCard

// 1. 전역요서 설치!!!
// 2. 터미널 사용
// command prompt o

// powershell x
// command prompt o
// json-server --watch db.json

// 로그인 // 로그아웃
// 로그인페이지 : 로그인 여부 boolean
