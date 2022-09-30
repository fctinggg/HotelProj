import Button from '@mui/material/Button';

const CommonButton = ({children, color, disable, size, sx, variant, type}) => {
  return (
    <Button
      color={color}
      disable={disable}
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