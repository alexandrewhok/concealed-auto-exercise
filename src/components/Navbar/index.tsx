import { Brand, NavbarContainer } from "./styles";

const Navbar = () => {
  const goBack = () => {
    window.location.href = "/";
  };

  return (
    <NavbarContainer>
      <Brand onClick={goBack}>
        <h5>Concealed</h5>
        <h5>auto</h5>
      </Brand>
    </NavbarContainer>
  );
};

export default Navbar;
