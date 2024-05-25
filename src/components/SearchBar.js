import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [small, setSmall] = useState(false);
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };


  const handleFocus = () => {
    setFocused(true);
  };
  
  const handleBlur = () => {
    setFocused(false);
  };

  const cancel = () => {
    setSearchTerm('');
  };  
  const small_screen = () => {
    setSmall(true);
  };

  return (
    <form
      onSubmit={onhandleSubmit}
      className="search-form  items-center  flex focused_on_search ">
      <div className={`${small ? "block ":"hidden" }`}>
        <div className={`${focused ? '  rounded-s-3xl flex justify-center items-center pl-2  search_icons': ' hidden '  }`}>
          <SearchIcon />
        </div>
        <div style={{border: '1px solid #ccc', borderLeft: 'none'}} className={`${focused ? 'search  w-full flex justify-between border-solid  border-y-2 search-bar': 'search w-full flex justify-between  border-solid border-2 rounded-s-3xl ml-3 search-bar'}`}>
          <input
            className='w-10/12 ml-5 text-base search'  
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder='Search'
            value={searchTerm}
            style={{height:'39px'}}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AiOutlineClose onClick={cancel} className={`${searchTerm ? 'size-6' : 'hidden' }`} />
        </div>
      </div>
      <button
        onClick={small_screen}
        style={{height:'41px', width:'62px'}}
        aria-label='search'
        className={`${small ? "hidden" : "block" }`}
      >
        <SearchIcon />
      </button>
      <button
        type='submit'
        onClick={small_screen}
        style={{border: '1px solid #ccc', height:'41px', width:'62px'}}
        className={`${small ? "":"text-black-500 border-gray-500 bg-stone-100  rounded-e-3xl"}`}
        aria-label='search'
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;



{/* <form
onSubmit={onhandleSubmit}
className="search-form  items-center  flex focused_on_search ">
  <div className={`${focused ? '  rounded-s-3xl flex justify-center items-center pl-2  search_icons': ' hidden '  }`}>
    <SearchIcon />
  </div>
  <div style={{border: '1px solid #ccc', borderLeft: 'none', alignItems: 'center'}} className={`${focused ? 'search  w-full flex justify-between border-solid  border-y-2 search-bar': 'search w-full flex justify-between  border-solid border-2 rounded-s-3xl ml-3 search-bar'}`}>
    <input
      className='w-10/12 ml-5 text-base search'  
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder='Search'
      value={searchTerm}
      style={{height:'39px'}}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <AiOutlineClose onClick={cancel} className={`${searchTerm ? 'size-6' : 'hidden' }`} />
  </div>
<button
  type='submit'
  style={{border: '1px solid #ccc', height:'41px', width:'62px'}}
  className={`${small ? "":"text-black-500 border-gray-500 bg-stone-100  rounded-e-3xl"}`}
  aria-label='search'
>
  <SearchIcon />
</button>
</form> */}














