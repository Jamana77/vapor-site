// function toggleAccordion(element) {
//     const accordionItem = element.parentElement;
//     accordionItem.classList.toggle('active');
// }
    

function toggleAccordion(element) {
    const accordionItem = element.parentElement;
    
    // Toggle the 'active' class
    accordionItem.classList.toggle('active');
    
    // Get the accordion content
    const accordionContent = accordionItem.querySelector('.accordion-content');

    // Check if the content is already open
    if (accordionItem.classList.contains('active')) {
        // If active, set maxHeight to scrollHeight to open the accordion
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
        // If not active, set maxHeight to 0 to close the accordion
        accordionContent.style.maxHeight = null;
    }
}
  