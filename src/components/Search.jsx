const Search = ({search,setSearch}) => {
  return (
    <div>
      <label>search</label>
      <input type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default Search
