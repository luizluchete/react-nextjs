import Title from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div>
      <Title title={props.title} subtitle={props.subtitle}></Title>
    </div>
  );
};

export default Header;
