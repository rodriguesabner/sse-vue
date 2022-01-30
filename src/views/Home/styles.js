import styled from 'vue-styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WrapperImage = styled.div`
  padding: 2em;
  background: rgba(240, 240, 240, 0.43);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 4px;
`;

export const WrapperInfo = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;

  h1 {
    font-size: 26px;
    max-width: 400px;
    text-align: center;
  }

  p {
    color: #666;
    max-width: 350px;
    text-align: center;
    margin-top: 1em;

    b {
      color: #333;
    }
  }
`;

export const SpinnerComponent = styled.svg`
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;
  margin-top: 2em;

  circle {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
    background: red;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
