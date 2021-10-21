/* eslint-disable camelcase */
import MaterialIcon from '@material/react-material-icon';
import TextField, { Input } from '@material/react-text-field';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import { Card, Map, Modal, RestaurantCard } from '../../components';
import { Carousel, CarouselTitle, Container, Logo, Search, Wrapper } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState(null);
  const [restaurants, restaurantSelected] = useSelector((state) => state.restaurants);
  const [placeId, setPlaceId] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo" />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.place_id}
                photo={restaurant.photos[0].getUrl()}
                title={restaurant.name}
              />
            ))}
          </Carousel>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <p>{restaurantSelected?.name}</p>
        <p>{restaurantSelected?.formatted_phone_number}</p>
        <p>{restaurantSelected?.formatted_address}</p>
      </Modal>
    </Wrapper>
  );
};

export default Home;
