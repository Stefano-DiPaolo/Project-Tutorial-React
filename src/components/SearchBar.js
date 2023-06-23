import { Search } from "@mui/icons-material";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import React from "react";

export const SearchBar = ({searchString, setSearchString}) => {
    return (
       <FormControl variant="standard"  style={{marginLeft:10}}>
        <InputLabel htmlFor="search" >
          Search Course
        </InputLabel>
        <Input
          id="search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <Search/>
            </InputAdornment>
          }
        />
      </FormControl>
    )
}