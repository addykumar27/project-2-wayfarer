import React, {Component} from 'react'
import City from './City'

class CityList extends Component {

	render() {

		let citiesArray = this.props.cities.map( (city) => {

			return (
				<City 
					key={city._id}
					city={city}
					className={city.type} />
			)
		})

		return(

			<div className="citiesGrid"> 
				{citiesArray}
			</div>	

		)
	}
}

export default CityList;