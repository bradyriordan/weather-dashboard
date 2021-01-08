import React from 'react';
import Currentweather from '../components/currentWeather'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        address: '',
        coords: { lat: '45.405092253881584', lng: '-75.74760442131101' },
        city: 'Ottawa, Ontario',        
    };
  }
 
  handleChange = (address) => {   
    this.setState({ address });    
  };
 
  handleSelect = address => {
    geocodeByAddress(address)                
      .then(results => getLatLng(results[0]))          
      .then(latLng => this.setState({ coords: latLng, address: address, city: address }))            
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <>
      <div className="padding-top-15 input">
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="input-container">
            <input
              {...getInputProps({
                placeholder: 'Search Location...',
                className: 'form-control',
              })}
            />
            <div className="input-dropdown">
              {loading}
              {suggestions.map((suggestion, i) => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';                
                return (
                  <div key={i}
                    {...getSuggestionItemProps(suggestion, {
                      className,                      
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <Currentweather latLng={this.state.coords} city={this.state.city}/>      
      </div>
      </>
    );
  }
}

export default Input;