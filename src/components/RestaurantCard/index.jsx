import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png';
import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do restaurante</Title>
      <ReactStars count={5} edit={false} value={4} isHalf activeColor="#e7711c" />
      <Address>Quadra 104, Residencial Colina</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="" />
  </Restaurant>
);

export default RestaurantCard;
