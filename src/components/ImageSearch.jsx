import React, { useState } from 'react'

const ImageSearch = ({searchText, }) => {
let [text, setText] = useState('')
const onSubmit = (e) => {
    e.preventDefault()
    searchText(text)
}
    return (
        <div className='flex justify-center p-10 '>
            <form action="" onSubmit={onSubmit}>
                <input type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                className=" border-2 border-black px-2"
                placeholder='search'
                />
                <button type="submit" className="ml-10 bg-gray-700 px-4 py-2 text-white rounded">Search</button>
            </form>
        </div>
    )
}

export default ImageSearch
