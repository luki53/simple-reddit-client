import React, {useState, useEffect} from "react";
import { Label, Input, Button } from "reactstrap";
import { changeSearchString } from "../../util/slice/listings/searchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadSearch } from "../../util/slice/listings/searchSlice";

export const Search = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');
    const goTo = useNavigate();
    
    const submitHandler = () => {
        dispatch(changeSearchString(searchString));
        dispatch(loadSearch(searchString));
        const modifiedString = searchString.replace(/ /g, '+');
        goTo('/fetch/' + modifiedString);
    };

    const clickHandler = () => {
        setSearchString('');
    }

    useEffect(() => {
        
    }, []);

    return (
    <div>
        <Label for="search">
            Search
        </Label>
        <Input
            id="search"
            name="search"
            placeholder="Search..."
            type="search"
            onClick={clickHandler}
            onChange={(e) => setSearchString(e.target.value)}
            value={searchString}
        />
        <Button onClick={submitHandler}>Search</Button>
    </div>
    )
}