import { useEffect, useState } from "react";
import DataList from "./DataList";

export default function Input({countries}) {

    const [search, setSearch] = useState('')
    const [filtered, setFiltered] = useState([...countries])

    const onChange = e => {
        const newFilter = countries.filter(country => country.name.common.toLowerCase().includes(e.target.value))
        setFiltered(newFilter)
        setSearch(e.target.value)
    }

    useEffect(()=>{
        setFiltered(countries)
    }, [countries])

	return (
		<div className="col-4 searchBar">
			<form>
				<label htmlFor="exampleFormControlInput1" className="form-label">
					Search Country
				</label>
				<input
                    onChange={onChange}
					className="form-control"
					id="browsers"
                    autoComplete="off"
					placeholder="Autocomplete Country"
				/>
                {search.length > 0 && <DataList data={filtered} />}
			</form>
		</div>
	);
}
