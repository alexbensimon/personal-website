// @ts-nocheck
/* eslint-disable */

export const loadOmnisend = () => {
  window.omnisend = window.omnisend || [];
  omnisend.push(['accountID', '5f8c77dd8a48f71a87728503']);
  omnisend.push(['track', '$pageViewed']);
  !(function () {
    var e = document.createElement('script');
    (e.type = 'text/javascript'),
      (e.async = !0),
      (e.src = 'https://omnisrc.com/inshop/launcher-v2.js');
    var t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(e, t);
  })();
};
