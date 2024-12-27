import { NavLink } from "react-router";

const MenuButton = ({name}) => {
    return (
        <NavLink to={`/${name}`} className="border-2 w-4/5 py-1.5 border-slate-400 rounded-lg">
            <p className="text-xl text-center font-semibold uppercase">{name}</p>
        </NavLink>
    );
}

export default MenuButton;