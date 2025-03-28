
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize Telegram Mini App
declare global {
  interface Window {
    Telegram: any;
  }
}

// Setup theme based on Telegram theme
const setupTelegramTheme = () => {
  try {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.ready();
      
      // Apply Telegram theme colors if available
      if (webApp.themeParams) {
        document.documentElement.style.setProperty(
          '--tg-theme-bg-color', 
          webApp.themeParams.bg_color || '#ffffff'
        );
        document.documentElement.style.setProperty(
          '--tg-theme-text-color', 
          webApp.themeParams.text_color || '#000000'
        );
        document.documentElement.style.setProperty(
          '--tg-theme-hint-color', 
          webApp.themeParams.hint_color || '#999999'
        );
        document.documentElement.style.setProperty(
          '--tg-theme-link-color', 
          webApp.themeParams.link_color || '#F27997'
        );
        document.documentElement.style.setProperty(
          '--tg-theme-button-color', 
          webApp.themeParams.button_color || '#F27997'
        );
        document.documentElement.style.setProperty(
          '--tg-theme-button-text-color', 
          webApp.themeParams.button_text_color || '#ffffff'
        );
      }
    }
  } catch (e) {
    console.log('Telegram WebApp not available, running in browser mode');
  }
};

// Call setup function
setupTelegramTheme();

createRoot(document.getElementById("root")!).render(<App />);
