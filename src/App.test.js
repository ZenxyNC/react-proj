import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const emailValidation = user_data.find((validation) => validation.email === email)
    const passValidation = user_data.find((validation) => validation.password === password)
    if (emailValidation) {
      setEmailValid(true)
      setError('')
      if(passValidation) {
        setAuth(true)
        setUsername(emailValidation.username)
        setError('')
        setPassValid(true)
      } else {
        setAuth(false)
        setPassValid(false)
        setError('Invalid password')
      }
    } else {
      setAuth(false)
      setError('Invalid email')
    }