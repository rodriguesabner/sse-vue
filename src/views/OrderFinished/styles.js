import styled from 'vue-styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #000;
  height: 100%;
  color: #fff;
  padding: 2em;

  h1 {
    text-align: center;
  }

  .pedido {
    padding: 2em;
    background: #131313;
    margin-top: 2em;
    border-radius: 4px;
    width: 100%;
    max-width: 600px;

    ul {
      list-style-type: none;

      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1em;

        p {
          font-size: 18px;
        }

        :last-child {
          margin-bottom: 0;
        }
      }
    }

    .total {
      margin-top: 2em;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #fff;
      padding-top: 10px;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export const ImageComponent = styled.img`
  width: 250px;
  height: 250px;

  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;

  @-webkit-keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
`;
