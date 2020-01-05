import React from 'react';

const SearchBox = () => {
    return (
        <div>
            <h1>Search the weather</h1>
            <div className='center'>
                <div className='center form pa5 br2 shadow-3'>
                    <input type='text' placeholder='Type your location' className='pa3 f4 w-70' />
                    <button className='pa3 grow f4 w-30 link bg-black white'
                    > Search
                    </button>
                </div>
            </div>
        </div>

    )
}

export default SearchBox;