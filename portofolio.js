document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('section[id]');

    const setActive = (id) => {
        links.forEach(a => {
            if (a.getAttribute('href') === `#${id}`) {
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });
    };

    if (location.hash) {
        setActive(location.hash.slice(1));
    }

    window.addEventListener('hashchange', () => {
        setActive(location.hash.slice(1));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActive(entry.target.id);
            }
        });
    }, { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


function more() {
    let see = document.getElementsByClassName('see');
    let isi = document.getElementsByClassName('isi-port');
    let blog = document.getElementById('Blog');
    if (isi[0].style.height === '112.07vh'){
        see[0].textContent = 'Less Projects';
        isi[0].style.height = '226.13vh';
        blog.style.marginTop = '114.06vh';

        if (window.innerWidth <= 768) {
            blog.style.marginTop = '';
        }
    } else {
        see[0].textContent = 'More Projects';
        isi[0].style.height = '112.07vh';
        blog.style.marginTop = '';
    }
}

function submit() {
    const inputs = document.querySelectorAll('.ussr input');
    inputs.forEach(input => {
        input.value = '';
    });
}