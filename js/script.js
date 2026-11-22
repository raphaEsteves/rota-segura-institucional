// Destaca automaticamente o link da página atual no menu
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a:not(.btn)').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'page');
  }
});

// Menu mobile
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Acordeão FAQ (na página de contato)
document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const answer = button.nextElementSibling;

    button.setAttribute('aria-expanded', String(!expanded));
    if (answer) {
      answer.classList.toggle('is-open', !expanded);
    }
  });
});

// Validação de demonstração do formulário de contato
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = contactForm.nome.value.trim();
    const retorno = contactForm.retorno.value.trim();
    const mensagem = contactForm.mensagem.value.trim();

    if (!nome || !retorno || !mensagem) {
      formFeedback.textContent = 'Preencha nome, canal de retorno e mensagem para enviar.';
      formFeedback.className = 'form-feedback is-error';
      return;
    }

    formFeedback.textContent =
      'Solicitação registrada nesta demonstração de portfólio. Em produção, este formulário pode ser integrado a e-mail, CRM ou WhatsApp.';
    formFeedback.className = 'form-feedback is-success';
    contactForm.reset();
  });
}

// Botão flutuante Voltar ao Topo
const floatTopBtn = document.getElementById('back-to-top-float');

if (floatTopBtn) {
  const toggleFloatTopBtn = () => {
    floatTopBtn.classList.toggle('is-visible', window.scrollY > 320);
  };

  window.addEventListener('scroll', toggleFloatTopBtn, { passive: true });
  toggleFloatTopBtn();
}