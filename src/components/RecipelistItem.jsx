
import { Button, Card, CardContent, CardDescription, CardHeader } from "semantic-ui-react";
import {Link} from 'react-router-dom';

const RecipeListItem = ({recipe}) => {

    return (
       <Card>
        <img src={recipe.image_url} alt="thumbnail" style={{height: 170}}/>
        <CardContent>
            <CardHeader content={recipe.title}/>
            <CardDescription>
                <h4>{recipe.publisher}</h4>
            </CardDescription>
        </CardContent>
        <CardContent>
        <Button
         as={Link}
         to={`/recipes/${recipe.recipe_id}`}
         content="Details"
         color="red"
        />
        <Button
        href={recipe.source_url}
        target="_blank"
        content="Recipe Url"
        color="green"
        />
        </CardContent>
       </Card>
    )
}

export default RecipeListItem;