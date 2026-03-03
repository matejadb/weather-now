import Logo from "../ui/Logo";

function Header({ children }) {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between">
      <Logo />
      {children}
    </header>
  );
}

export default Header;
