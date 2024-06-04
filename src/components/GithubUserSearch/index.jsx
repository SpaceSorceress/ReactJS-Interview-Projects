import { useState } from "react";
import { useFetchHook } from "../../hooks/useFetch";
import LoadingSpinner from "../LoadingSpinner";
import UserCard from "./userCard";
import "./styles.css";
import Header from "../Header";

export default function GithubSearchUser() {
  const [userName, setUserName] = useState("SpaceSorceress");
  const [searchValue, setSearchValue] = useState("");

  const url = `https://api.github.com/users/${userName}`;

  const [userData, error, loading] = useFetchHook(url);

  function performSearch() {
    setUserName(searchValue);
    setSearchValue("");
  }
  return (
    <div className="github-container">
      <div className="gs-header">
        <Header title={"Github User Search"} />
      </div>

      <div className="gs-input-row">
        <input
          type="text"
          placeholder="Search by Github username"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? performSearch() : null)}
          className="gs-input"
        />
        <button
          disabled={searchValue.trim() == ""}
          onClick={performSearch}
          className="gs-button"
        >
          Search User
        </button>
      </div>
      <div className="gs-service-row">
        {loading && <LoadingSpinner />}
        {error &&
          (error == "404"
            ? "There is no user with this username. Try again"
            : `We're sorry, an error occured:${error}`)}
      </div>
      <div className="user-card-container">
        {!error && userData?.id && <UserCard user={userData} />}
      </div>
    </div>
  );
}
