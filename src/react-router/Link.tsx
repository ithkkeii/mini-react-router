import React, { useContext } from 'react';
import { RouterContext } from './Router';

const Link: React.FC<{ to: string }> = (props) => {
  const { push } = useContext(RouterContext);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault();
    push(props.to);
  };

  return (
    <a href={props.to} onClick={handleClick}>
      {props.children}
    </a>
  );
};

export default Link;
