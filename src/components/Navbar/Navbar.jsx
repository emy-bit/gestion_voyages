import Footer from './Footer';
import Menu from './Menu';
import Title from './Title';
const Navbar = () => {
    return ( 
        <div className="h-full flex flex-col w-1/5 bg-slate-200 rounded-lg">
            <Title/>
            <Menu/>
            <Footer/>
        </div>
    );
}
 
export default Navbar;