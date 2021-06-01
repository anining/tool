import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const onClick = () => {
    history.push('');
  }

  return (
    <header onClick={onClick}>
      header
    </header>
  )
}

export default Header;
