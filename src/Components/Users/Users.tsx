import React from 'react';
import styles from "./users.module.css";
import avatar from "../../assets/img/icon-256x256.png";
import {UsersType} from "../../redux/userReducer";
import {NavLink} from "react-router-dom";



type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersType[]
    follow: (usedID: number) => void
    unFollow: (usedID: number) => void
    onPageChanged: (pageNumber: number) => void
    setFollowingInProgress: (isFetching: boolean, userID: any) => void
    followingInProgress: any[]
}
export const Users = (props: PropsType) => {
    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <ol className={styles.pagesNav}>
                {pages.map((p, i) => <li key={i}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}
                    className={props.currentPage === p ? styles.selectedPage : ''}>{p}</li>)}
            </ol>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small !== null ? u.photos.small : avatar} alt="avatar"
                                     className={styles.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unFollow(u.id)
                                }}>UnFollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
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
        </div>
    );
};

