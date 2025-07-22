document.addEventListener('DOMContentLoaded', () => {
    const yourPassword = "nostalgia";

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
        fetch('memories.json')
            .then(response => response.json())
            .then(data => {
                const memories = data;
                initMemoriesPage(memories);
            })
            .catch(err => {
                console.error("Failed to load memories:", err);
                scrapbookContainer.innerHTML = `<p style="color:red;">Error loading memories!</p>`;
            });
    }

    function initMemoriesPage(memories) {
        const sortedMemories = memories.sort((a, b) => new Date(b.date) - new Date(a.date));
        createScrollingBanner(sortedMemories);
        setupTimeline(sortedMemories);
        renderMemories(sortedMemories);

        Fancybox.bind("[data-fancybox]", {});

        let currentFilter = 'All';
        let currentlyDisplayedMemories = [];

        function setupTimeline(allMemories) {
            const timelineNav = document.getElementById('timeline-nav');
            timelineNav.innerHTML = '';
            const years = ['All', ...new Set(allMemories.map(m => m.date.substring(0, 4)))];

            const favoritesButton = document.createElement('button');
            favoritesButton.className = 'timeline-button';
            favoritesButton.innerHTML = '★ Favorites';
            favoritesButton.addEventListener('click', () => filterAndRender('Favorites'));
            timelineNav.appendChild(favoritesButton);

            years.forEach(year => {
                const button = document.createElement('button');
                button.className = 'timeline-button';
                button.textContent = year;
                button.addEventListener('click', () => filterAndRender(year));
                timelineNav.appendChild(button);
            });
        }

        function filterAndRender(filter) {
            currentFilter = filter;
            const allMemories = memories.sort((a, b) => new Date(b.date) - new Date(a.date));

            if (filter === 'All') {
                currentlyDisplayedMemories = allMemories;
            } else if (filter === 'Favorites') {
                currentlyDisplayedMemories = allMemories.filter(m => m.favorite);
            } else {
                currentlyDisplayedMemories = allMemories.filter(m => m.date.startsWith(filter));
            }

            renderMemories(currentlyDisplayedMemories);

            document.querySelectorAll('.timeline-button').forEach(button => {
                button.classList.remove('active');
                if (button.textContent.includes(filter)) {
                    button.classList.add('active');
                }
            });
            if (filter === 'All') document.querySelector('.timeline-button').classList.add('active');
        }

        function renderMemories(memoriesToRender) {
            const scrapbook = document.getElementById('scrapbook-container');
            scrapbook.innerHTML = '';

            if (memoriesToRender.length === 0) {
                scrapbook.innerHTML = `<p class="empty-message">No favorite memories yet. Click the pin icon on a memory to add one!</p>`;
                return;
            }

            memoriesToRender.forEach(memory => {
                const isVideo = memory.type === 'video';
                const tapeClass = memory.tapeStyle || '';
                const favoriteClass = memory.favorite ? 'is-favorite' : '';

                const item = document.createElement('div');
                item.className = `scrapbook-item ${tapeClass} ${favoriteClass}`;

                item.innerHTML = `
                    <button class="favorite-toggle" title="Toggle Favorite">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M16 3.00002C18.7614 3.00002 21 5.23859 21 8.00002C21 10.133 19.8331 12.0161 18.2323 13.1931L12.0003 19.424L5.76826 13.192C3.96843 11.8887 3 9.85915 3 7.76826C3 5.12251 5.12251 3 7.76826 3C9.43846 3 10.9577 3.82846 11.8893 5.05041L12.0003 5.20148L12.1113 5.05041C13.0429 3.82846 14.5621 3.00002 16 3.00002Z"></path>
                        </svg>
                    </button>
                    <a href="${memory.url}" data-fancybox="gallery" data-caption="${memory.caption}">
                        ${isVideo ? `<video muted loop playsinline src="${memory.url}"></video>` : `<img src="${memory.url}" alt="${memory.caption}">`}
                    </a>
                    <div class="item-caption">${memory.caption}</div>
                `;

                item.querySelector('.favorite-toggle').addEventListener('click', () => {
                    const originalMemory = memories.find(m => m.url === memory.url);
                    if (originalMemory) {
                        originalMemory.favorite = !originalMemory.favorite;
                    }
                    filterAndRender(currentFilter);
                });

                scrapbook.appendChild(item);
            });
        }

        function createScrollingBanner(memories) {
            const bannerContainer = document.getElementById('scrolling-banner');
            if (!bannerContainer) return;

            const shuffledMemories = [...memories];
            let currentIndex = shuffledMemories.length;
            while (currentIndex !== 0) {
                const randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [shuffledMemories[currentIndex], shuffledMemories[randomIndex]] =
                    [shuffledMemories[randomIndex], shuffledMemories[currentIndex]];
            }

            const bannerMemories = shuffledMemories.slice(0, 8);

            bannerMemories.forEach((memory, index) => {
                const item = document.createElement('div');
                item.className = `item item${index + 1}`;
                item.innerHTML = `<img src="${memory.url}" alt="${memory.caption}">`;
                bannerContainer.appendChild(item);
            });
        }

        filterAndRender('All');
    }
});
