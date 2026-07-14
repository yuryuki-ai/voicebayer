// ===== 公開前の設定項目：URLはここだけ変更してください =====
const APPLICATION_URL = 'https://example.com/application';
const PRIVACY_URL = '#';
const LEGAL_URL = '#';
const CONTACT_URL = '#';

document.documentElement.classList.add('js');

document.querySelectorAll('.apply-link').forEach((link) => {
  link.href = APPLICATION_URL;
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
