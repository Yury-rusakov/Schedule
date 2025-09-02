// LanguageSwitcher.jsx
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './LanguageSwitcher.css';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' }
];

function LanguageSwitcher({ setLocale, currentLocale }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLanguageSelect = (code) => {
    setLocale(code);
    setIsOpen(false);
    setSearchTerm('');
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  return (
    <div className="language-switcher">
      <div 
        className="language-selector"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="current-language">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <span className="dropdown-arrow">▼</span>
      </div>

      {isOpen && (
        <div className="language-dropdown">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search languages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="language-search"
              autoFocus
            />
          </div>
          
          <div className="language-list">
            {filteredLanguages.map(language => (
              <div
                key={language.code}
                className={`language-item ${currentLocale === language.code ? 'selected' : ''}`}
                onClick={() => handleLanguageSelect(language.code)}
              >
                <span className="language-flag">{language.flag}</span>
                <span className="language-name">{language.name}</span>
                <span className="language-code">{language.code}</span>
              </div>
            ))}
            
            {filteredLanguages.length === 0 && (
              <div className="no-results">
                <FormattedMessage 
                  id="language.noResults" 
                  defaultMessage="No languages found" 
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
