import CardNav from './Header/CardNav'
import '../cdn/font.css'

export default function Header() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      href: "#About"
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      href: "#Projects"
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      href: "#Contact"
    }
  ];

  return (
    <CardNav
      items={items}
      ease="power3.out"
    />
  );
};