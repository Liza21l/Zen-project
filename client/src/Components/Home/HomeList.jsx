import {useSelector, useDispatch} from "react-redux"
import HomeListItem from "./HomeListItem"
import { setProduct } from "../../features/sllices/productSllice"
import s from "../Home/categories/categories.module.scss"

const HomeList = (props) => {
    const dispatch = useDispatch()
   const { filterList, list, categoriesActive } = useSelector((state) => state.product)
   const handleGetProduct = () => {
    dispatch(setProduct(categoriesActive))

   }
   const ProductCollection = list.map(item => {
    return (
        <HomeListItem key={item.id} id={item.id} name={item.name} price={item.price} photo={item.photo}/>
    )
})
    return (
        <div className={s.product}>
            <hr className={s.hr}></hr>
            {ProductCollection}
        </div>
    )
}

export default HomeList