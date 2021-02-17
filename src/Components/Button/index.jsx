import { StyledButton } from "./style";

const Button = ({ children, onClick, color, size, font }) => {
  return (
    <StyledButton font={font} onClick={onClick} color={color} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
