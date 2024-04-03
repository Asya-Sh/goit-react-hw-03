import s from './SearchBox.module.css';

const SearchBox = ({ searchValue, setSearchValue }) => {
    return (
        <div className={s.search}>
            <h2>Find contacts by name</h2>
            <input type="text" placeholder="Search name..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
        </div>
    );
};

export default SearchBox;
