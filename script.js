// const list = document.querySelector('#list')
// const hidden = document.querySelector('.hidden')
// const section = document.querySelector('.section-right')
// const grid = document.querySelector('#grid')
// list.addEventListener('click', () =>{
//     hidden.style.display = 'block';
//     section.style.display = 'none';
// })
// grid.addEventListener('click', () =>{
//     section.style.display = 'block';
//     hidden.style.display = 'none';
// })
// document.addEventListener('DOMContentLoaded', () => {
//     const list = document.querySelector('#list');
//     const hidden = document.querySelector('.hidden');
//     const section = document.querySelector('.section-right');
//     const grid = document.querySelector('#grid');

//     if (list && hidden && section && grid) {
//         list.addEventListener('click', () => {
//             hidden.style.display = 'block';
//             section.style.display = 'none';
//         });

//         grid.addEventListener('click', () => {
//             section.style.display = 'block';
//             hidden.style.display = 'none';
//         });
//     } else {
//         console.error('One or more elements not found.');
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    const listSectionRight = document.querySelector('#listSectionRight');
    const gridSectionRight = document.querySelector('#gridSectionRight');
    const listHidden = document.querySelector('#listHidden');
    const gridHidden = document.querySelector('#gridHidden');
    const icon = document.querySelector('#icon');

    //if (listSectionRight && gridSectionRight && listHidden && gridHidden) {
        listSectionRight.addEventListener('click', () => {
            document.querySelector('.hidden').style.display = 'block';
            document.querySelector('.section-right').style.display = 'none';
        });

        gridSectionRight.addEventListener('click', () => {
            document.querySelector('.section-right').style.display = 'block';
            document.querySelector('.hidden').style.display = 'none';
        });

        listHidden.addEventListener('click', () => {
            document.querySelector('.hidden').style.display = 'block';
            document.querySelector('.section-right').style.display = 'none';
        });

        gridHidden.addEventListener('click', () => {
            document.querySelector('.section-right').style.display = 'block';
            document.querySelector('.hidden').style.display = 'none';
        });   
});
const icon = document.querySelector('#icon');
icon.addEventListener('click', () => {
    //icon.style.transform = 'rotate(180deg)';
    const list = document.querySelector('.list');
    if (list.style.display === 'block') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.submit');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = '/aut.html';
        });
    });
     const view = document.querySelectorAll('.btn');

     view.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = '/aut.html';
        })
     })
});
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('registration-form');
//     const thankYouMessage = document.querySelector('.thank-you-message');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the form from submitting in the traditional way

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const tickets = document.getElementById('tickets').value;

//         // Store the values in local storage
//         localStorage.setItem('name', name);
//         localStorage.setItem('email', email);
//         localStorage.setItem('tickets', tickets);

//         // Hide the form and show the thank-you message
//         form.style.display = 'none';
//         thankYouMessage.style.display = 'block';
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const thankYouMessage = document.querySelector('.thank-you-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tickets = document.getElementById('tickets').value;

        // Store the values in local storage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('tickets', tickets);

        // Hide the form and show the thank-you message
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.navigation');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    header.insertBefore(menuToggle, nav);

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});



