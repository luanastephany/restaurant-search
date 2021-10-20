import { GoogleApiWrapper } from 'google-maps-react';

export const MapContainer = (props) => {
  const { google } = props;
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
