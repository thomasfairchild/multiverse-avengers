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
    // onClick={heroDetailHtml}
    />
    </>
)
}

export default SearchPage