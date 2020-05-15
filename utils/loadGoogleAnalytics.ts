// @ts-nocheck

export const loadGoogleAnalytics = () => {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-166830606-1';
  document.body.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'UA-166830606-1');
};
