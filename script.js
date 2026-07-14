// ===== 公開前の設定項目：URLはここだけ変更してください =====
const APPLICATION_URL = 'https://6109kentei.thebase.in/items/150558311';
const PRIVACY_URL = 'https://6109kentei.thebase.in/privacy';
const LEGAL_URL = 'https://6109kentei.thebase.in/law';
const CONTACT_URL = 'https://www.roudokukentei.jp/contact/index.php';

document.documentElement.classList.add('js');

document.querySelectorAll('.apply-link').forEach((link) => {
  link.href = APPLICATION_URL;
});
document.querySelector('https://6109kentei.thebase.in/privacy').href = PRIVACY_URL;
document.querySelector('https://6109kentei.thebase.in/law').href = LEGAL_URL;
document.querySelector('https://www.roudokukentei.jp/contact/index.php').href = CONTACT_URL;

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
