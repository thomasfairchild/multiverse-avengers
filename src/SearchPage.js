import SearchBar from './SearchBar';

const SearchPage = (props) => {

const {handleChange, searchText} = props;
const {input, updateInput} = props;

return (
<>
<SearchBar
    input={input}
    searchText={searchText}
    handleChange={handleChange}
    onChange={updateInput}
    />
        <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
    </>
)
}

export default SearchPage