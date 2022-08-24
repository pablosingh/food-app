import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchDog } from '../redux/actions';
// import { Dog } from './Dog';    
import styled from 'styled-components';
import { gray } from '../styles/colors';

export const SearchBar = () => {
    // const estado = useSelector(state => state);
    const [ searchText, setSearchText ] = useState("");

    // let history = useHistory("/pokemon");
    // const dispatch = useDispatch();

    const changing = (e) => setSearchText(e.target.value);
    
    const submiting = e => { 
        e.preventDefault();
        // dispatch(searchDog(searchText));
        console.log(searchText);
        setSearchText("");
    }

    return (
        <ContainerFilters>
            <form className={'container'} action='POST'>
                <input type="searchText" 
                    placeholder="Search" 
                    onChange={changing}
                    value={searchText}
                    className={'searchText'}/>
                    <button type='submit' onClick={ submiting } className={'btn'}>
                        Search
                    </button>
            </form>
            {/* <Dog/> */}
        </ContainerFilters>
    )
};

const ContainerFilters = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .searchText{
        border-radius: 1em;
        margin: 1em 2em;    
        padding: 0.5em 1em;
    }
    .btn{
        border-radius: 1em;
        margin: 1em 2em;
        padding: 0.5em 1em;
        background-color: ${gray};
        color: white;
    }
    .btn:hover{
        color: #3a4d54;
        background-color: white;
    }
`;