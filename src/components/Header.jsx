function Header({ children }) {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between">
      {children}
    </header>
  );
}

export default Header;
