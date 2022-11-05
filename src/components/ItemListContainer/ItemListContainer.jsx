import "./ItemListContainer.css";
import { getItems, getSingleCategory } from '../../services/firestore';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import Spinner from "../Spinner/Spinner";


function ItemListContainer() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { cat } = useParams();

    useEffect(() => {
        setIsLoading(true);
        if (cat === undefined) {
            getItems()
                .then((respuesta) => setData(respuesta))
                .catch((errormsg) => {
                    console.log(errormsg.message);
                    setError(errormsg.message);
                })
                .finally(() => setIsLoading(false))
        }
        else {
            getSingleCategory(cat)
                .then((respuesta) => setData(respuesta))
                .catch((errormsg) => {
                    console.log(errormsg.message);
                    setError(errormsg.message);
                })
                .finally(() => setIsLoading(false))
        }
    },
        [cat]
    )


    if (isLoading) {
        return <>
            {error ?
                <div>
                    <h1 style={{ color: "#aa0033" }}>Error obteniendo los datos</h1>
                    <p>{error}</p>
                </div>
                :
                <Spinner />}
        </>
    }

    return (
        <div className="container">
            <ItemList data={data} />
        </div>
    );
}

export default ItemListContainer;