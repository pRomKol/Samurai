import React from 'react';
import styles from './users.module.css'
import {UsersType} from "../../redux/userReducer";

type PropsType = {
    users: UsersType[]
    follow: (usedID: number) => void
    unFollow: (usedID: number) => void
    setUsers: (users: UsersType[]) => void
}
export const Users = (props: PropsType) => {
    if (props.users.length === 0 ){
        props.setUsers(
        [
            {
                id: 1,
                photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
                followed: true,
                fullName: 'Sergey',
                status: 'yo!',
                location: {city: 'Minsk', country: 'Belarus'},
            },
            {
                id: 2,
                photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
                followed: true,
                fullName: 'Ilya',
                status: '1',
                location: {city: 'Bobruisk', country: 'Belarus'},
            },
            {
                id: 3,
                photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
                followed: false,
                fullName: 'Sergey',
                status: 'qwe',
                location: {city: 'Moscow', country: 'Russia'},
            },
            {
                id: 4,
                photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
                followed: false,
                fullName: 'Sergey',
                status: 'ewq!',
                location: {city: 'Kiev', country: 'Ukraine'},
            },
            {
                id: 5,
                photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
                followed: false,
                fullName: 'Sergey',
                status: 'zxc',
                location: {city: 'Minsk', country: 'Belarus'},
            },
        ]
    )}

    return (
        <div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoURL} alt="avatar" className={styles.avatar}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>UnFollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                            </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

