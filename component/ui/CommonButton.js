import Button from '@mui/material/Button';

const CommonButton = ({children, color, disabled, size, sx, variant, type}) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
      variant={variant}
      type={type}
    >
      {children}
    </Button>
  )
}

export default CommonButton;