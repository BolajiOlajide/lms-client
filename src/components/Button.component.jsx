import React from 'react';
import Button from 'antd/lib/button';


const _Button = ({ name, onClick, className }) => (
  <Button className={className} onClick={onClick}>
    {name}
  </Button>
);

export default _Button;
