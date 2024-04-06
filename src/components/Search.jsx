import { useState } from "react";
import { Grid, GridColumn, Form, Input } from "semantic-ui-react";

const Search = ({setSearchedQuery}) => {
    const [value, setValue] = useState("");

    const onFormSubmit = () => {
        setSearchedQuery(value);
        
    }

    return(
        <Grid columns={2} textAlign="center" className="search-box"> 
            <GridColumn>
                <h2 className="search-heading">Search Recipes with <span style={{color: "maroon"}}> Cooking Book </span> </h2>
                <h4 style={{color: "darkblue"}}>Input Recipes seperted by comma</h4>
                <Form onSubmit={onFormSubmit}>
                    <Input
                     placeholder="Potatoooo......"
                     action={{icon:"food", color:'gray'}}
                     onChange={(e) => setValue(e.target.value)}
                     value={value}
                    />
                </Form>
            </GridColumn>
        </Grid>
    )
}

export default Search;