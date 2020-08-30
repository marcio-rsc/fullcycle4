import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export interface IUser {
        id: string;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
}

function UserList(){
    const [user_list, setUserList] = useState([{
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        avatar: '',
    }]);

    const [adinfo, setAdInfo] = useState({
        company: '',
        url: '',
        text: '',
    });

    const [page, setPage] = useState(0);
    const [per_page, setPerPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [total_pages, setTotalPages] = useState(0);

    function getUsers(user_page = 1){
            api.get('users',{
                params: {
                    //per_page: 3,
                    page: user_page
                }
            }).then(response => {
                const { 
                    page, 
                    per_page, 
                    total,
                    total_pages,
                    ad,
                    data,
                } = response.data;
    
                setTotal(total);
                setPage(page);
                setPerPage(per_page);
                setTotalPages(total_pages);
    
                setUserList(data);
                setAdInfo(ad);
                
            }).catch(() => {
                alert('Sem usuários para listar.');
            })
    }

    useEffect(() => {
        getUsers();
    }, []);
    
    return(
        <div id="page-userlist">
            <header>
                <div className="header-content">
                    <h1>Full Cycle4 - Desafio4</h1>
                </div>
                <Link to="/" >
                    Inicio
                </Link>
            </header>
            <main>
                <div className="userlist-container">
                    <h1>Lista de Usuários</h1>
                    <h3>
                        Registros Total[{total}] / 
                        Registros por Paginas[{per_page}]
                    </h3>
                    <h4>
                        {page>1?<button onClick={() => getUsers(page - 1)}>[=</button>:null}
                        {page<total_pages?<button onClick={() => getUsers(page + 1)}>=]</button>:null}
                    </h4>
                    <h4>
                        Pagina[{page}] / Total de Paginas[{total_pages}]
                    </h4>

                    <table className="userlist-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Avatar</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user_list.map((user: IUser) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>
                                            <img src={user.avatar!==''? user.avatar:""} alt="NA" />
                                        </td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <h4>
                        Pagina[{page}] / Total de Paginas[{total_pages}]
                    </h4>
                    <h4>
                        {page>1?<button onClick={() => getUsers(page - 1)}>[=</button>:null}
                        {page<total_pages?<button onClick={() => getUsers(page + 1)}>=]</button>:null}
                    </h4>
                </div>
            </main>
            <footer>
                <div className="footer-content">
                    <table className="footer-content-table">
                        <thead>

                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>By: {adinfo.company}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href={adinfo.url}>{adinfo.url}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        {adinfo.text}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </footer>
        </div>
    );
}

export default UserList;