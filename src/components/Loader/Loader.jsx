import {Puff} from "react-loader-spinner";
import './Loader.css';

export default function Loader(){
    return (
        <div className="loader">
        <Puff color="#E6E6FA" height={80} width={80} />
        </div>
    )
}