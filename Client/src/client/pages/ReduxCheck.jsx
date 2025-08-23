import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productSlice";
const Check=()=>{

    const dispatch=useDispatch();
    const {items,loading,error} =useSelector(state => state.products);

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);
    
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

    return(
        <>
        <div>
            <h2>all products</h2>
            {items.map(p =>(
                <div  key={p._id}>
                <h3>{p.name}</h3>
                <p>{p.price}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Check;