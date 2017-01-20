import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  text-align: center;
  padding: 0.25em 2em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #41ADDD;

  &:hover, &:active {
    background: #41ADDD;
    color: #FFF;
  }
  &.active-route {
    text-decoration: underline;
  }
`;
