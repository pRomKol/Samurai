import React from 'react';
import styles from './users.module.css'
import {UsersType} from "../../redux/userReducer";
import axios from "axios";
import avatar from '../../assets/img/icon-256x256.png'

type ResponseType1<G> = {
    items: G
    totalCount: number

}

type PropsType = {
    users: UsersType[]
    setCurrentPage: (pageNumber: number) => void
    follow: (usedID: number) => void
    unFollow: (usedID: number) => void
    setUsers: (users: UsersType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setTotalUsersCount:(usersCount: number) => void
}

export class Users extends React.Component<PropsType, any> {

    componentDidMount() {
        axios.get<ResponseType1<UsersType[]>>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            }
    );

    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<ResponseType1<UsersType[]>>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }
    render() {
        let pagesCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <ol className={styles.pagesNav}>
                    {pages.map(p=> <li
                        onClick={()=>{this.onPageChanged(p)}}
                        className={this.props.currentPage === p ? styles.selectedPage: ''}>{p}</li>)}
                </ol>
                {this.props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : avatar} alt="avatar"
                                 className={styles.avatar}/>
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


