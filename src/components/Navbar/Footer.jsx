import { IoLogOutOutline, IoSettingsOutline} from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
const Footer = () => {
    return ( 
        <div className="w-full flex justify-between items-center gap-5 px-3 border-t-4 border-slate-300 rounded-full mt-5 py-4">
            <div className="flex gap-2 items-center">
                <RxAvatar className="size-8"/>
                <div className="text-xs">
                    <p>name</p>
                    <p>test@gmail.com</p>
                </div>
            </div>

            <div className="flex gap-3 items-center">
                <IoLogOutOutline  className="size-6 hover:cursor-pointer"/>
                <IoSettingsOutline className="size-5 hover:cursor-pointer"/>
            </div>
        </div>
     );
}
 
export default Footer;