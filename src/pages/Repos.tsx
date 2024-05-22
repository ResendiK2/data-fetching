import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Repository } from "../types/types";

export function Repos() {
  // const { data: repositories, isFetching } = useFetch<Repository[]>(
  //   "https://api.github.com/users/resendiK2/repos"
  // );

  const { data: repositories, isFetching } = useQuery<Repository[]>(
    "repos",
    async () => {
      const response = await axios.get<Repository[]>(
        "https://api.github.com/users/resendiK2/repos"
      );

      return response.data;
    },
    {
      staleTime: 1000 * 60,
    }
  );

  return (
    <div>
      {isFetching && <p>Loading...</p>}

      <h1>Repositories</h1>

      <ul>
        {repositories?.map((repo: Repository) => (
          <li key={repo.id}>
            <Link to={`repos/${repo.name}`}>{repo.name}</Link>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
