import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import logoImage from "../../assets/logo.svg";
import Footer from "../../components/Footer";

import { Header, Issues, RespositoryInfo } from "./styles";
import { GetRepositoryDetails } from "../../../domain/use-cases/GetRepositoryDetails";
import { RepositoryDetails } from "../../../domain/models/RepositoryDetails";
import { GetRepositoryIssues } from "../../../domain/use-cases/GetRepositoryIssues";
import { RepositoryIssue } from "../../../domain/models/RepositoryIssue";

/**
 *  👋👨‍💻 Hey there! It's time to make some changes. 🚀
 *  Here are some Next Steps for you:
 *  ✨ Add/Create smaller components when possible.
 *  🧪 Add unit tests.
 *  🧹 Apply Clean Code to this project.
 *  If you have any Further Questions,
 *  feel free to contact me: https://www.linkedin.com/in/matheus-sunderhus/ 📩
 */

interface Props {
  getRepositoryDetails: GetRepositoryDetails;
  getRepositoryIssues: GetRepositoryIssues;
}

const RepositoryDetailsPage: React.FC<Props> = ({
  getRepositoryDetails,
  getRepositoryIssues,
}: Props) => {
  const { owner = "", repositoryName = "" } = useParams<{
    owner: string;
    repositoryName: string;
  }>();
  const [repository, setRepository] = useState<RepositoryDetails | null>(null);
  const [issues, setIssues] = useState<RepositoryIssue[]>([]);

  useEffect(() => {
    getRepositoryDetails
      .get(owner, repositoryName)
      .then((repository) => {
        setRepository(repository);
      })
      .catch(() => {
        setRepository(null);
      });

    getRepositoryIssues
      .get(owner, repositoryName)
      .then((issues) => {
        setIssues(issues);
      })
      .catch(() => {
        setIssues([]);
      });
  }, [getRepositoryDetails, getRepositoryIssues, owner, repositoryName]);

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} color="#3D3D4D" />
          <strong>Go back</strong>
        </Link>
      </Header>
      {repository ? (
        <RespositoryInfo>
          <header>
            <img src={repository.owner.avatar} alt="Owner profile avatar" />
            <div>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stars}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.issues}</strong>
              <span>Open issues</span>
            </li>
          </ul>
        </RespositoryInfo>
      ) : (
        <p>Loading information.</p>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.linkTo}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.createdBy}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>

      <Footer />
    </>
  );
};

export default RepositoryDetailsPage;
