import React from 'react';

const user = {
  email: 'test',
};

console.log(user?.email);

const Menu = () => {
  return <div>Menu</div>;
};

console.warn(Menu);
