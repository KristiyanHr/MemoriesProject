document.addEventListener('DOMContentLoaded', () => {

    // 1. Set your secret password here
    const yourPassword = "nostalgia";

    // 2. Add your memories here
    // UPDATED: I've added an optional 'tapeStyle' property.
    // Use 'tape-pink' to apply the pink tape style from our CSS.
    // If you leave it out, it will use the default blue tape.
    const memories = [
        {
            date: '2023-07-22',
            type: 'image',
            url: 'media/1/afterACL.jpeg',
            caption: 'Ти беше до мен винаги когато ми трябваше най-много!',
            tapeStyle: 'tape-pink' // NEW: Optional property for pink tape
        },
        {
            date: '2022-01-15',
            type: 'image',
            url: 'media/1/cageForKitties.jpeg',
            caption: 'А тук майсторим клетката за поколения котета напред. О, какъв спомен само!'
        },
        {
            date: '2024-04-05',
            type: 'image',
            url: 'media/1/cutties.jpeg',
            caption: 'Това просто сме си ние - сладури (така де, по-скоро ти).',
            tapeStyle: 'tape-pink' 
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/1/meWithGlasses.jpeg',
            caption: 'Тук ми показваш новите работи, които са ти дали на dev събитието.'
        }
        ,
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/1/onAWalk.jpeg',
            caption: 'Тук просто си се разхождаме из балкана.',
            tapeStyle: 'tape-pink' 
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/1/ourLastSpa.jpeg',
            caption: 'А тук си ме снимала на последното място на което сме били заедно. Не е за вярване :('
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/1/peshtera.jpeg',
            caption: 'При най-грижовните баба и дядо.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/1/seaPhoto.jpeg',
            caption: 'Ах морето, едно от любимите ми приключения с вас.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/1/shower.jpg',
            caption: 'Рандом снимка на мен в банята. Любимото ти занимание'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/1/staroplaninets.jpeg',
            caption: 'Бих казал че сме наистина красиви заедно и то си личи.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/1/usSmiling.jpeg',
            caption: 'Ето още едно потвърждение на думите ми.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/1/watermelon.jpeg',
            caption: 'Пак си ме хванала в момент на мултитаскинг.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/arm.jpg',
            caption: 'В този момент ти пак беше там. А лисичката... Core Memory',
            tapeStyle: 'tape-pink'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/bothMasked.jpg',
            caption: 'Бяхме си направили маски след цял ден усърдна почивка на басейните.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/iLookGood.jpg',
            caption: 'А тук..., тук ми каза, че съм много хубав със синьо. Винаги ще го помня.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/lotoShirt.jpg',
            caption: 'Тъкмо и бях взел този комплект, а колко съм малъккк.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/mask.jpg',
            caption: 'Тук съм малко недоволен от новостите по лицето ми.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/onPool.jpg',
            caption: 'А това е една от любимите ми снимки... Красота.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/Pool2.jpg',
            caption: 'Толкова хубав момент, че заслужава втора снимка.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/sleepy.jpg',
            caption: 'Тук мога да усетя през снимката колко ми се спи всъщност.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/spaTime.jpg',
            caption: 'Просто красота, не знам по какъв друг начин да те опиша, без това да заеме останалото място в сайта.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/squuzed.jpg',
            caption: 'Тук ми мачкаш бузите, anoter core memory.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/2/sushi.jpeg',
            caption: 'Ах, сушито — още едно прекрасно нещо в живота, чиято врата ти отвори за мен.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/chair.jpg',
            caption: 'Изглеждам готов да покорим спа центъра.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/closeUp.jpg',
            caption: 'Колко ми липсва да ми правиш такива снимки само аз си знам.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/cooked.jpg',
            caption: 'Както би казал Фотев - "Ах, колко си хубава", а аз толкова хилав.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/cooking.jpg',
            caption: 'Тук съм щастлив че ти готвя моя специалитет - пиле къри.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/gifts.jpg',
            caption: 'Няма как да ти обясня колко бях щастлив от подаръците, може би тази усмивка може.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/gornishte.jpg',
            caption: 'И ето ме и мен видимо доволен от новата придобивка.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/kamsi.jpg',
            caption: 'Двамата с Камси. Тук съм много малък.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/loveStare.jpg',
            caption: 'Момент тип: Ако не ме гледа така, не го искам.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/pazardjik.jpg',
            caption: 'Тук сме на финала на мъжете в Пазарджик.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/skiTrip.jpg',
            caption: 'А тук ти показах, всъщност колко е хубаво усещането да караш ски... Свобода.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/topcho.jpg',
            caption: 'Топчо, Бобчо или Дробчо, това е едно от най-сладките същества. Личи си, че много го обичам.'
        },
        {
            date: '2024-08-10',
            type: 'image',
            url: 'media/3/winter.jpg',
            caption: 'Приготвяме се да излезем на вечеря след дълъг ден...'
        }
    ];

    // --- PASSWORD PAGE LOGIC (No changes needed here) ---
    const passwordForm = document.getElementById('password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const passwordInput = document.getElementById('password-input');
            const errorMessage = document.getElementById('error-message');
            
            if (passwordInput.value === yourPassword) {
                window.location.href = 'memories.html';
            } else {
                errorMessage.style.visibility = 'visible';
                passwordInput.focus();
            }
        });
    }

    // --- MEMORIES PAGE LOGIC ---
    const scrapbookContainer = document.getElementById('scrapbook-container');
    if (scrapbookContainer) {
        const sortedMemories = memories.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        setupTimeline(sortedMemories);
        renderMemories(sortedMemories);

        // NEW: Initialize Fancybox after rendering the memories
        Fancybox.bind("[data-fancybox]", {
            // You can add custom options here if you want
        });
    }
    
    // --- TIMELINE LOGIC (No changes needed here) ---
    function setupTimeline(memories) {
        const timelineNav = document.getElementById('timeline-nav');
        // Clear previous buttons to prevent duplicates on filter
        timelineNav.innerHTML = ''; 
        const years = ['All', ...new Set(memories.map(m => m.date.substring(0, 4)))];

        years.forEach(year => {
            const button = document.createElement('button');
            button.className = 'timeline-button';
            button.textContent = year;
            if (year === 'All') {
                button.classList.add('active');
            }
            
            button.addEventListener('click', () => {
                document.querySelectorAll('.timeline-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const allMemories = memories.sort((a, b) => new Date(b.date) - new Date(a.date));
                const filteredMemories = (year === 'All')
                    ? allMemories
                    : allMemories.filter(m => m.date.startsWith(year));
                renderMemories(filteredMemories);
            });
            timelineNav.appendChild(button);
        });
    }

    // --- RENDER MEMORIES FUNCTION (Completely rewritten for new features) ---
    function renderMemories(memoriesToRender) {
        const scrapbook = document.getElementById('scrapbook-container');
        scrapbook.innerHTML = ''; // Clear existing content

        memoriesToRender.forEach(memory => {
            // Determine if the item is a video for special handling
            const isVideo = memory.type === 'video';

            // Use the tapeStyle from data, or an empty string if it's not defined
            const tapeClass = memory.tapeStyle || '';

            // Create the main container div
            const item = document.createElement('div');
            item.className = `scrapbook-item ${tapeClass}`;

            // Create the media element with the Fancybox anchor tag
            const mediaElement = `
                <a href="${memory.url}" data-fancybox="gallery" data-caption="${memory.caption}">
                    ${isVideo
                        // If it's a video, create a muted, looping preview
                        ? `<video muted loop playsinline src="${memory.url}"></video>`
                        // If it's an image, create a standard image tag
                        : `<img src="${memory.url}" alt="${memory.caption}">`
                    }
                </a>
                <div class="item-caption">${memory.caption}</div>
            `;
            
            item.innerHTML = mediaElement;
            scrapbook.appendChild(item);
        });
    }
});