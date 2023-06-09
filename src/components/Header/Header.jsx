import Button from "../Button/Button";
import { useTelegram } from './../../hooks/useTelegram';

const Header = (props) => {
   const { user, onClose, tg } = useTelegram();

   return (
      <div className={'header'}>
         <Button onClick={onClose}>Закрыть</Button>
         <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
      </div>
   );
};

export default Header;