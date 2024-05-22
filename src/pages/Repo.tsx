import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "../types/types";

export function Repo() {
  const params = useParams();
  const currentRepo = params["*"] as string;

  const queryClient = useQueryClient();

  function handleChangeRepo() {
    // queryClient.invalidateQueries("repos");

    const prevRepos = queryClient.getQueryData<Repository[]>("repos");

    if (!prevRepos) return;

    const idx = prevRepos.findIndex((repo) => repo.name === currentRepo);

    if (idx === -1) return;

    const newRepos = [...prevRepos];

    newRepos[idx] = {
      ...newRepos[idx],
      name: "new-name",
    };

    queryClient.setQueryData("repos", newRepos);
  }

  return (
    <div>
      <p>Repo: {currentRepo}</p>

      <button onClick={() => handleChangeRepo()}>Change Repo</button>
    </div>
  );
}
