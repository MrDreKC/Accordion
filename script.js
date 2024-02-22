const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(accordionItem => accordionItem.addEventListener('click', () => {
    if (accordionItem.classList.contains('open')) {
      accordionItem.classList.remove('open');
    } else {
      accordionItems.forEach(accordionItemTitle => accordionItemTitle.classList.remove('open'));
      accordionItem.classList.add('open');
    }
  })
)
