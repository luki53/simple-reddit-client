import React, {useState} from "react";
import { FormGroup, Label, Input } from "reactstrap"; 

export const Search = (props) => {
    const [searchString, setSearchString] = useState('');
    
    const submitHandler = () => {
        props.searchFor(searchString);
        setSearchString('');
    }
    return (
    <FormGroup onSubmit={submitHandler}>
        <Label for="exampleSearch">
            Search
        </Label>
        <Input
            id="search"
            name="search"
            placeholder="Search..."
            type="search"
            onChange={(e) => setSearchString(e.target.value)}
            value={searchString}
        />
        <Input type="submit" />
    </FormGroup>
    )
}