import SearchViewForm from "./SearchViewForm.jsx";
import SearchViewResults from './SearchViewResults.jsx'// not working at the moment

export default function SearchView() {
  return (
    <>
      <h2>Search form</h2>
      <SearchViewForm />
      <SearchViewResults />
    </>
  );
}
