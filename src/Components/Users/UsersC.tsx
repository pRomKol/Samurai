import React, {useEffect} from 'react';
import styles from './users.module.css'
import {UsersType} from "../../redux/userReducer";
import axios from "axios";
import avatar from '../../assets/img/icon-256x256.png'

type ResponseType1 = {
    items: UsersType[]
}

type PropsType = {
    users: UsersType[]
    follow: (usedID: number) => void
    unFollow: (usedID: number) => void
    setUsers: (users: UsersType[]) => void
}
export class Users extends React.Component<PropsType, any> {
 getUsers = () => {
     if (this.props.users.length === 0 ) {
         axios.get<ResponseType1>('https://social-network.samuraijs.com/api/1.0/users')
             .then(response => this.props.setUsers(response.data.items))
     }
 }

    render() {return (
    <div>
        <button onClick={()=> this.getUsers}>Get Users</button>
        {this.props.users.map(u =>
            <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null? u.photos.small: avatar } alt="avatar" className={styles.avatar}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>UnFollow</button> : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                            </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{}</div>
                            <div>{}</div>
                        </span>
                    </span>
            </div>

        )}
        <div>
            <button>Show More</button>
        </div>
    </div>)
}

}

