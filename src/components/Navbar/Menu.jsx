import MenuButton from "./MenuButton";

const Menu = () => {
    return ( 
        <div className="flex-grow h-full px-3 flex flex-col items-center justify-evenly">
            <MenuButton name={"voyages"}/>
            <MenuButton name={"destinations"}/>
            <MenuButton name={"activites"}/>
            <MenuButton name={"budget"}/>
            <MenuButton name={"discussions"}/>
            <MenuButton name={"support"}/>
        </div>
    );
}
 
export default Menu;