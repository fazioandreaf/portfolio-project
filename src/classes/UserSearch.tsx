import { Component, Fragment } from "react";
import { User, users } from './../state/UserSearch'

interface UserSearchProps {
    user: User[]
}

interface UserSearchState {
    name: string;
    user: User | undefined
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined
    }

    onClick = () => {
        const foundUser = users.find((user)=> {
            return user.name.toLowerCase() === this.state.name.toLowerCase()
        })

        this.setState({name: foundUser})
    }

    render() {
        const {name, user} = this.state

       return (
        <Fragment>
            <h3>UserSearch</h3>
            <input
                value={name}
                onChange={(e) => this.setState({name: e.target.value})} />
            <button onClick={this.onClick}>Find User</button>
            <div>
                {user && `${user.name} ${user.age}`}
            </div>
        </Fragment>
       )
    }
}

export default UserSearch