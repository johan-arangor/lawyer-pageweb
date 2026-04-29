import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function BookingButton({ children, className, onClick, to = '/agendar', ...props }) {
  const { user, openAuth } = useAuth();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!user) {
      e.preventDefault();
      openAuth('login');
    } else {
      if (onClick) {
        onClick(e);
      } else {
        // Default behavior: go to target page
        navigate(to);
      }
    }
  };

  return (
    <button onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  );
}
