import styled, { keyframes } from "styled-components";
import React, { Component } from 'react';
import { ReactComponent as tableContentsHome } from './img/tableContentsHome.svg';
import { render } from "@testing-library/react";

const enlarge = keyframes`
0% {
  transform: scale(1);
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  transform-origin: center;
}
`;

const minimize = keyframes`
0% {
    transform: scale(4.5);
    transform-origin: center;
  }
  100% {
    transform: scale();
    transform-origin: center;
  }
  `;

  const BlueLine = styled(tableContentsHome)`
  justify-contents: center;
  width: 70%;
  align-items: center;
  justify-contents: center;
  margin: auto;
  .home {
    animation: ${enlarge} infinite 4s;
    &:hover {
      animation-play-state: started;
      cursor: pointer;
    }
  }
`;

function HomeTableContents()
{
    return(
        <BlueLine />
    )
}

export default HomeTableContents;