
let h2Tags = document.querySelectorAll('h2');
let contactSec= document.getElementById('conlist');




h2Tags.forEach((h2) => {
    let details = h2.nextElementSibling;
    details.classList.add('hidden');
    contactSec.classList.remove('hidden');
    h2.addEventListener('click', () => {
        let container = h2.parentElement;
        
       
    
        if (details.style.maxHeight === '0px' || details.classList.contains('hidden')) {
            container.classList.add('open'); // Add the 'open' class to the container
            details.classList.remove('hidden');
            details.style.maxHeight = details.scrollHeight + 'px';
           
        } else {
            details.style.maxHeight = '0px'; // collapse
            details.classList.add('hidden');
            container.classList.remove('open'); // Remove the 'open' class from the container
        }
    });
});
