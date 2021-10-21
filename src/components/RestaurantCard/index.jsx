/* eslint-disable camelcase */
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png';
import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => (
  <Restaurant onClick={onClick}>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} edit={false} value={restaurant.rating} isHalf activeColor="#e7711c" />
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt="" />
  </Restaurant>
);

export default RestaurantCard;
