import React from 'react';
import { useState } from 'react';
import Sresult from './Sresult'

const Search = () => {
    const [search, SetSearch] = useState();

    const ie = (element) => {
        SetSearch(element.target.value)

    }

    return (
        <>  <div>
            <input type="text"
                onChange={ie}
                value={search} />
        </div>
            {search === "" ? null : <Sresult name={search} />}

        </>
    )
}

export default Search;