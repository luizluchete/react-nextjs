import { IConCategory, IconHome, IConLogout } from "../icons";
import Link from "next/link";
import Logo from "./Logo";

interface MenuProps {}

const Menu = (props: MenuProps) => {
  return (
    <aside className={`bg-gray-700 flex flex-col items-center`}>
      <Logo></Logo>
      <ul className="flex-grow">
        <MenuItem href="/" text="Início" icon={IconHome}></MenuItem>
        <MenuItem
          href="/categories"
          text="Categorias"
          icon={IConCategory}
        ></MenuItem>
      </ul>
      <ul>
        <MenuItem
          text="Sair"
          icon={IConLogout}
          callback={(event) => {
            console.log("Logout", event);
          }}
          className={`hover:bg-red-500 hover:text-white text-red-400`}
        ></MenuItem>
      </ul>
    </aside>
  );
};

interface MenuItemProps {
  href?: string;
  text: string;
  icon: any;
  className?: string;
  isActive?: boolean;
  callback?: (event: any) => void;
}
const MenuItem = (props: MenuItemProps) => {
  const renderizarLink = () => {
    return (
      <a
        className={`flex flex-col justify-center items-center h-14 w-24 text-white ${props.className}`}
      >
        {props.icon}
        <span className="text-xs font-light">{props.text}</span>
      </a>
    );
  };

  return (
    <li
      onClick={props.callback}
      className={`hover:bg-gray-500 cursor-pointer ${
        props.isActive ? "bg-gray-500" : ""
      }`}
    >
      {props.href ? (
        <Link href={props.href}>{renderizarLink()}</Link>
      ) : (
        renderizarLink()
      )}
    </li>
  );
};

Menu.Item = MenuItem;
export default Menu;
