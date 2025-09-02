import React, { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import en from './locales/en.json';
import ru from './locales/ru.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import ar from './locales/ar.json';
import pt from './locales/pt.json';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css';

const messages = {
  'en': en,
  'ru': ru,
  'es': es,
  'fr': fr,
  'de': de,
  'zh': zh,
  'ja': ja,
  'ko': ko,
  'ar': ar,
  'pt': pt
};

function App() {
  const [locale, setLocale] = useState(() => {
    const storedLocale = localStorage.getItem('locale');
    const browserLang = navigator.language.split('-')[0];
    return storedLocale || (messages[browserLang] ? browserLang : 'en');
  });

  const [currentMessages, setCurrentMessages] = useState(messages[locale]);

  useEffect(() => {
    setCurrentMessages(messages[locale]);
  }, [locale]);

  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={currentMessages}>
      <div className="app">
        <header className="app-header">
          <LanguageSwitcher setLocale={setLocale} currentLocale={locale} />
        </header>
        
        <main className="app-content">
          <h1><FormattedMessage id="menu.home" /></h1>
          <p><FormattedMessage id="menu.about" /></p>
          <p><FormattedMessage id="menu.contact" /></p>
        </main>
      </div>
    </IntlProvider>
  );
}

export default App;

