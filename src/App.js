import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Input";
import { getAllCountries } from "./service/CountryService";

function App() {
	const [countries, setCountries] = useState([]);

	const fetchData = () => {
		getAllCountries()
			.then((response) => setCountries(response.data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App">
			<Input countries={countries}/>
		</div>
	);
}

export default App;
