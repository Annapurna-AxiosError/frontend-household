import { Home2, Bookmark, Box } from "iconsax-react";
import { NavLink } from "react-router-dom";

function NavbarItem({ Icon, text, to }) {
  return (
    <NavLink to={to} className="flex flex-col items-center">
      {({ isActive }) => (
        <>
          <Icon
            variant={isActive ? "Bold" : "Linear"}
            color={isActive ? "#23AA49" : "#23AA49"} // TODO: Pass from tailwind theme
          />
          <span
            className={`text-xs ${isActive ? "text-primary" : "text-mute "}`}
          >
            {text}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default function FooterNav() {
  return (
    <div className="h-20 fixed bottom-0 left-0 w-full flex flex-row justify-around pt-3 z-10 shadow-2xl bg-background">
      <NavbarItem Icon={Home2} text="DashBoard" to="/" />
      <NavbarItem Icon={Box} text="Campaign" to="/campaign" />
      <NavbarItem Icon={Bookmark} text="Recipe AI" to="/recipe" />
    </div>
  );
}
