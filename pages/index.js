import Link from 'next/link';
import baseUrl from '../helpers/baseUrl'
const Home = (props) => {
    const productList = props.products.map(product=>{
        return (
            <div className="card" key={product._id}>
                <div className="card-image">
                    <img src={product.mediaUrl} />
                        <span className="card-title">{product.name}</span>
                </div>
                <div className="card-content">
                    <p>Rs. {product.price}</p>
                </div>
                <div className="card-action">
                    <Link  href={'/product/[id]'} as={`/product/${product._id}`}>
                        <a>This is a link</a>
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <div className="rootCard">
            {productList}
        </div>
    )
}
export async function getStaticProps() {
    const res = await fetch(`${baseUrl}api/products`)
    const data = await res.json()
    return {
        props: {
            products:data
        }, // will be passed to the page component as props
    }
}
export default Home;