// ===== 公開前の設定項目：URLはここだけ変更してください =====
const APPLICATION_URL = 'https://6109kentei.thebase.in/items/150558311';
const PRIVACY_URL = 'https://6109kentei.thebase.in/privacy';
const LEGAL_URL = 'https://6109kentei.thebase.in/law';
const CONTACT_URL = 'https://www.roudokukentei.jp/contact/index.php';

// Google Analyticsを利用する場合は、HTML側でGoogleタグを設定してください。
// GAが未設定でも、クリック時にエラーは発生しません。

document.documentElement.classList.add('js');

const heroOffer = document.querySelector('.hero-offer');
const heroButton = document.querySelector('.hero .apply-main');
if (heroOffer && heroButton) {
  heroButton.before(heroOffer);
}

function applicationUrl(position) {
  const url = new URL(APPLICATION_URL, window.location.href);
  url.searchParams.set('source', 'voicebayer_lp');
  url.searchParams.set('position', position);
  return url.href;
}

document.querySelectorAll('.apply-link').forEach((link) => {
  let position = 'middle';
  if (link.closest('.topbar') || link.closest('.hero')) position = 'first_view';
  if (link.closest('.final-cta')) position = 'bottom';

  link.dataset.buttonPosition = position;
  link.href = applicationUrl(position);
  link.addEventListener('click', () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'application_button_click', {
        button_position: position
      });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'application_button_click',
      button_position: position
    });
  });
});
document.querySelector('#privacy-link').href = PRIVACY_URL;
document.querySelector('#legal-link').href = LEGAL_URL;
document.querySelector('#contact-link').href = CONTACT_URL;

// 控えめなフェードイン演出。非対応環境では最初から本文を表示します。
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
} else {
  document.querySelectorAll('.reveal').forEach((section) => section.classList.add('visible'));
}

// FAQはHTMLのdetails要素を使っているため、JavaScriptなしでも開閉できます。
