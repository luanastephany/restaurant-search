import MaterialIcon from '@material/react-material-icon';
import TextField, { Input } from '@material/react-text-field';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { Container, Logo, Map, Search, Wrapper } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo" />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
