import * as React from 'react';
import { Container, Menu, Logo } from './styles'
import logo from '../../images/logo.png';

import menuIcon from '../../images/menu.png';

export default function Header() {
  return (
    <Container>
      <Menu source={menuIcon}/>
      <Logo source={logo} />
    </Container>
  );
}
