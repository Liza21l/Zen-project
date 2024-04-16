import { useSelector } from "react-redux"
import axios from "axios"
import CategoriesListItem from "../categories/categoriesListItem"

const CategoriesList = () => {
    const {categories, categoriesActive} = useSelector(state => state.product)
    return (
        <ul>
            {
                categories.map(item => 
                    <CategoriesListItem key={item} text={item} isActive={item === categoriesActive}/>
                )
            }
        </ul>
    )
}

export default CategoriesList