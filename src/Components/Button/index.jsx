import { StyledButton } from "./style";

const Button = ({ children, onClick, color, size }) => {
  return (
    <StyledButton onClick={onClick} color={color} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
