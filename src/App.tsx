import { useFetch } from "./hooks/useFetch";

type Repository = {
  name: string;
  html_url: string;
  id: number;
  description: string;
};

function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>(
    "https://api.github.com/users/resendiK2/repos"
  );

  return (
    <div>
      {isFetching && <p>Loading...</p>}

      <h1>Repositories</h1>

      <ul>
        {repositories?.map((repo: Repository) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
