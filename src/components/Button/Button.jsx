// import { LoadMore } from "./Button.styled";
import './Button.css';

export default function Button({onLoadMore}){
    return (
<button className="onLoadMore" type="button" onClick={onLoadMore}>
Load more
</button>
    )
}


