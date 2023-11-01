import {useState, useEffect} from 'react'
function Products(){
    const [loading,setLoading] = useState(true)
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchApi = ()=>{
            fetch("https://dummyjson.com/products")
            .then (res=>res.json())
            .then(data=>{
                setData(data.products);
            })
        } 
        setTimeout(()=>{
            setLoading(false);
            fetchApi();
        },3000);
    },[data])
    
    return ( 
        <>
        {
            loading?(<>Chờ tí...</>):(
                <>
                <div className='listProducts'>
                {
                    data.map((item,_)=>(
                        <div className='item' key={item.id}>
                            <div className='name'>{item.title}</div>
                            <div className='img'><img src={item.thumbnail}/></div>
                            <div className='price'>{item.price}</div>
                        </div>
                        )
                    )
                }
            </div></>

            )
        
        }
        </>

    )
}
export default Products 
