import Alert from 'react-bootstrap/Alert';

export const Menu = () => {
  
  return (
    <div>
     
      <h1> Menu Page</h1>

      <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>

    </div>
  )
}