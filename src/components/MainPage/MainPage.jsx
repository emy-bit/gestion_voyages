import { useParams } from "react-router";
import Voyages from "./Voyages";
import Destinations from "./Destinations";
import Activites from "./Activites";
import Budget from "./Budget";
import Discussions from "./Discussions";
import Support from "./Support";

const MainPage = () => {
    let params = useParams();

    const list = [
        { name:'voyages', value: <Voyages/>},
        { name:'destinations', value: <Destinations/>},
        { name:'activites', value: <Activites/>},
        { name:'budget', value: <Budget/>},
        { name:'discussions', value: <Discussions/>},
        { name:'support', value: <Support/>},
    ]

    const pageComponent = list.find(item => item.name === params.page)?.value;

    return ( 
        <div className="h-full w-full">
            <div className=" py-7 flex justify-center">
                <h1 className="text-center text-2xl font-bold border-4 border-slate-300 inline px-20 py-3 rounded-full">{params.page}</h1>
            </div>

            {pageComponent ? pageComponent : <p>Page not found</p>}
        </div>
     );
}
 
export default MainPage;