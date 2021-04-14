/**
 * Created by ITShpere on 4/13/2021.
 */
import {useRouter} from 'next/router'
import baseUrl from '../helpers/baseUrl'

const Product = ({product}) => {
    const router = useRouter();
    if(router.isFallback){
        return (
            <h3>Loading...</h3>
        )
    }
    return (
        <div className="container center-align">
            <h3>{product.name}</h3>
            <img src={product.mediaUrl} alt=""/>
            <h5>{product.price}</h5>
            <input type="number"
            style={{width:'400px',margin:'10px'}} min="1"/>
            <p>{product.description}</p>
        </div>
    )
}

/*export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}*/
export async function getStaticProps({params:{id}}) {
    const res = await fetch(`${baseUrl}api/product/${id}`)
    const data = await res.json()
    return {
        props: {product:data}, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id:'607406178b904cc9bc4c436e' } } // See the "paths" section below
        ],
        fallback: true  // See the "fallback" section below
    };
}

export default Product