import React, { Component } from 'react';
import '../views/filters.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const initalState = { country: '', region: '', price: ''};
class Filters extends Component {
  constructor (props) {
    super(props);
    this.state = initalState
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }
  

  handleRadioChange(val) {
    this.setState({ price: val })
  };

  handleSubmit(event) {
    this.props.sendFilters(this.state)
    event.preventDefault();
  }
  
  deleteFilters() {
    this.setState(initalState)
  }



  render () {
    const { country, region, price } = this.state;
    return (
      <div className="filter-container">
        <span className="filter-title color">Filteri</span>
        <form onSubmit={(val) => this.handleSubmit(val)}>
          <div className="filter-item">
            <CountryDropdown
              defaultOptionLabel="Odaberite državu"
              value={country}
              onChange={(val) => this.selectCountry(val)}/>
          </div>
          <div className="filter-item">
            <RegionDropdown
              defaultOptionLabel="Odaberite region"
              country={country}
              value={region}
              onChange={(val) => this.selectRegion(val)}  />
          </div>
          <div className="filter-item">
            <FormControl component="fieldset">
              <FormLabel component="legend">Cijena</FormLabel>
              <RadioGroup aria-label="cijena" name="price" value={price} onChange={(val) => this.handleRadioChange(val.target.value)}>
                <FormControlLabel value="price0_10" control={<Radio />} label="0€ - 10€" />
                <FormControlLabel value="price10_50" control={<Radio />} label="10€ - 50€" />
                <FormControlLabel value="price50_100" control={<Radio />} label="50€ - 100€" />
                <FormControlLabel value="price100plus" control={<Radio />} label="100€ +" />
              </RadioGroup>
            </FormControl>
          </div>
          <Button variant="contained" type="submit">Primijeni</Button>
          <Button variant="contained" type="button" onClick= {() => this.deleteFilters()}>Obrisi</Button>
        </form>
      </div>
    );
  }
}

export default Filters