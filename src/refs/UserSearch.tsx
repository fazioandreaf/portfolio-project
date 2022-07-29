import { Fragment, useState, useRef, useEffect } from "react"

export const users = [
    {name: 'Sarah', age: 20},
    {name: 'Andre', age: 30},
    {name: 'Carlo', age: 40},
]

export interface User {
    name: string,
    age: number
}

const UserSearch: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [user, setUser] = useState<User | undefined>(undefined)
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (inputRef && inputRef.current) {
        inputRef.current.focus()
      }

    }, [])

    const onClick = (): void => {
        const foundUser = users.find((user)=> {
            return user.name.toLowerCase() === name.toLowerCase()
        })
        setUser(foundUser)
    }

    return (
        <Fragment>
            <h3>UserSearch</h3>
            <input
                ref={inputRef}
                value={name}
                onChange={(e) =>  setName(e.target.value)}
            />
            <button onClick={onClick}>Find User</button>
            <div>
                {user && `${user.name} ${user.age}`}
            </div>
        </Fragment>
    )
}

export default UserSearch