import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ShoppingCart({ itemQty }) {

    return (
        <>
            <div className="">
                <ShoppingCartIcon />
                {itemQty}
            </div>

        </>
    )
}