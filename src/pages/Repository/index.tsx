import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import api from '../../services/api';

import logoImage from '../../assets/logo.svg'

import { Header, RespositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}
interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
}
interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }

}


const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`/repos/${params.repository}`).then(response => {
            setRepository(response.data);
        });
        api.get(`/repos/${params.repository}/issues`).then(response => {
            setIssues(response.data);
        });

        /*
            Exemplo usando Promisse.all()

            async function loadData(): Promise<void> {
             const [repository, issues] = await Promise.all([
                 api.get(`/repos/${params.repository}`),
                 api.get(`/repos/${params.repository}/issues`)
             ])
            }

            loadData();
        */

    }, [params.repository])

    return (

        <>
            <Header >
                <img src={logoImage} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} color="#3D3D4D" />
                    <strong>Voltar</strong>
                </Link>
            </Header >
            {repository ? (
                <RespositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Start</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues abertos</span>
                        </li>
                    </ul>

                </RespositoryInfo>
            ) : (
                    <p>Carregando informações.</p>
                )}

            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    )
};



export default Repository;
