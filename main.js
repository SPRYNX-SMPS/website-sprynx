const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('visible'));
}

const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(leadForm);
    const subject = `SPRYNX Website Enquiry — ${data.get('interest') || 'General'}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Mobile: ${data.get('mobile') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `City: ${data.get('city') || ''}`,
      `School / Organisation / Student: ${data.get('organisation') || ''}`,
      `Role: ${data.get('role') || ''}`,
      `Interested in: ${data.get('interest') || ''}`,
      data.get('board') ? `Board: ${data.get('board')}` : '',
      data.get('programme') ? `Programme: ${data.get('programme')}` : '',
      data.get('cohort') ? `Approx. faculty / cohort: ${data.get('cohort')}` : '',
      data.get('preferred') ? `Preferred timing: ${data.get('preferred')}` : '',
      `Additional details: ${data.get('school-details') || data.get('student-details') || data.get('fdp-details') || data.get('counselling-details') || ''}`,
      '',
      'Message:',
      data.get('message') || ''
    ].filter((line, index, arr) => line !== '' || index >= arr.length - 2).join('\n');

    window.location.href = `mailto:sprynx@springmount.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
