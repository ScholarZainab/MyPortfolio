document.addEventListener('DOMContentLoaded', () => {
          const faqButtons = document.querySelectorAll('.faq-button');
          faqButtons.forEach(button => {
            button.addEventListener('click', () => {
              const content = button.nextElementSibling;

              // Close all other open FAQs
              document.querySelectorAll('.faq-content.open').forEach(openContent => {
                if (openContent !== content) {
                  openContent.classList.remove('open');
                  openContent.previousElementSibling.classList.remove('active');
                }
              });

              // Toggle the clicked FAQ
              content.classList.toggle('open');
              button.classList.toggle('active');
            });
          });
        });
