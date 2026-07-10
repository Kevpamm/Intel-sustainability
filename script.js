const rtlLanguages = [
  "ar",
  "he",
  "fa",
  "ur",
  "ps",
  "sd",
  "ku",
  "yi"
];

function getCurrentLanguage() {
  const htmlLang = document.documentElement.lang;
  const googleTranslateLang = document.querySelector("html").getAttribute("lang");

  return (googleTranslateLang || htmlLang || "en").toLowerCase();
}

function applyDirectionByLanguage() {
  const currentLanguage = getCurrentLanguage();
  const shortLanguageCode = currentLanguage.split("-")[0];

  if (rtlLanguages.includes(shortLanguageCode)) {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }
}

applyDirectionByLanguage();

const observer = new MutationObserver(() => {
  applyDirectionByLanguage();
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang", "class"]
});