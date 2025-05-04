document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('open');
  
      // Close other FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('open');
        }
      });
    });
  });
  const counters = document.querySelectorAll('.impact-card-number');
  const speed = 200; // lower is slower

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {
              counter.innerText = count + increment;
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target + "+"; // Add + after reaching
            }
          };

          updateCount();
        });

        observer.disconnect(); // Only run once
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById('impact'));
