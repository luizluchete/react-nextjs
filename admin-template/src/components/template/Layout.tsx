import Content from "./Content";
import Menu from "./Menu";
import Header from "./Header";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="flex h-screen w-screen">
      <Menu></Menu>

      <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
        <Header title={props.title} subtitle={props.subtitle}></Header>
        <Content>{props.children}</Content>
      </div>
    </div>
  );
};

export default Layout;
