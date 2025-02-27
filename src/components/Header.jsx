
import logo from './../assets/img/logo.webp'
import HeaderITem from './HeaderITem';
import { HiBars4 } from "react-icons/hi2";


function Header() {

const menu=[
    {
    name: 'HOME',
   
   },
   {
    name: 'ABOUT',
    
   },
   {
    name: 'PRODUCT',
 
   },{
    name: 'CONTACT'
    
   }
];

  return (
    <div className=" lg:flex hidden  items-center  justify-between p-5 bg-white/20 text-black backdrop-blur-md sticky top-0 z-50 border-zinc-300 border-b">
      <div className="flex items-center gap-8 mx-20 justify-between w-full">
        <div className="flex items-center justify-center">
          <img src={logo} className="w-[100px] md:w-[150px] object-cover" />
          <span className="text-yellow-500 text-2xl font-bold">
         
          </span>
        </div>
        <div className="w-full md:w-1/4 flex items-center  justify-between ">
          {menu.map((item) => (
            <HeaderITem key={item.name} name={item.name} />
          ))}
        </div>
      </div>

      <span className="text-4xl flex md:hidden">
        <HiBars4 />
      </span>
    </div>
  );} 


export default Header;