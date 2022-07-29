import { Fragment, useState } from "react"

const GuestList: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [guests, setGuests] = useState<string[]>([])

    const renderGuest = () => {
        return guests.map((guest)=> {return <li key={guest}>{guest}</li>})
    }

    const onClick = () => {
        setGuests([...guests, name])
        setName('')
    }

    return (<Fragment>
        <h3>Guest List</h3>
        <ul>
            {renderGuest()}
        </ul>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <button onClick={onClick}>Add Guest</button>
        {name}
    </Fragment>
    )
}

export default GuestList