import { useState } from 'react'
import { useRouter } from 'next/router'

function Search() {
    const [term, setTerm] = useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/events/search?term=${term}`)
        setTerm('')
    }
    return (
        <>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder='Search Events'
                />
            </form>
        </>
    )
}

export default Search
