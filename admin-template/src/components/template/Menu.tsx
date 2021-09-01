import { IConCategory, IconHome } from "../icons";
import Link from "next/link";

interface DrawlerProps {}

const Menu = (props: DrawlerProps) => {
  return (
    <aside>
      <ul>
        <MenuItem href="/" text="Home" icon={IconHome}></MenuItem>
        <MenuItem
          href="/categories"
          text="Categorias"
          icon={IConCategory}
        ></MenuItem>
      </ul>
    </aside>
  );
};

interface MenuItemProps {
  href: string;
  text: string;
  icon: any;
}
const MenuItem = (props: MenuItemProps) => {
  return (
    <li className="hover:bg-gray-200">
      <Link href={props.href}>
        <a className="flex flex-col justify-center items-center h-20 w-20">
          {props.icon}
          <span className="text-xs font-light text-gray-600">{props.text}</span>
        </a>
      </Link>
    </li>
  );
};

Menu.Item = MenuItem;
export default Menu;
