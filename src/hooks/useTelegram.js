
export function useTelegram() {
   const tg = window.Telegram.WebApp;
   const onClose = () => {
      tg.close();
   };

   const onToggleButton = () => {
      if (tg.mainButton.isVisible) {
         tg.mainButton.hide();
      } else {
         tg.mainButton.show();
      }
   }
   return {
      tg,
      onClose,
      onToggleButton,
      user: tg.initDataUnsafe?.user
   }
}