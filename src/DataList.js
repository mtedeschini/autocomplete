import './DataList.css'

export default function DataList({ data }) {

	return (
		<div className="list col-4">
            {data.map((country, index) => {
                return(
                    <div className='item'> 
                    <a href={country.maps.googleMaps} target="_blank" rel="noreferrer"  key={index}>{country.name.common}</a>
                    </div>
                )
            })}
		</div>
	);
}
