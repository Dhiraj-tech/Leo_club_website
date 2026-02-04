// Projects page pagination
(function() {
    let currentPage = 1;
    const itemsPerPage = 6; // 2 rows × 3 items per row

    function initPagination() {
        const container = document.getElementById('projectsGrid');
        if (!container) {
            console.log('Projects grid not found');
            return;
        }

        const projectColumns = Array.from(container.children).filter(function(el) {
            return el.className.indexOf('col-') !== -1;
        });
        const totalItems = projectColumns.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        console.log('Projects found:', totalItems, 'Total pages:', totalPages);

        if (totalItems === 0) return;

        function showPage(page) {
            var startIndex = (page - 1) * itemsPerPage;
            var endIndex = startIndex + itemsPerPage;

            for (var i = 0; i < projectColumns.length; i++) {
                if (i >= startIndex && i < endIndex) {
                    projectColumns[i].style.display = '';
                } else {
                    projectColumns[i].style.display = 'none';
                }
            }

            renderPagination(totalPages);
        }

        function renderPagination(totalPages) {
            const paginationContainer = document.getElementById('projectsPagination');
            if (!paginationContainer) {
                console.log('Pagination container not found');
                return;
            }

            if (totalPages <= 1) {
                paginationContainer.innerHTML = '';
                return;
            }

            let html = '<nav aria-label="Projects pagination"><ul class="pagination justify-content-center mb-0">';
            
            // Previous button
            html += '<li class="page-item ' + (currentPage === 1 ? 'disabled' : '') + '">';
            html += '<a class="page-link" href="#" data-page="' + (currentPage - 1) + '" aria-label="Previous">';
            html += '<span aria-hidden="true">&laquo;</span></a></li>';

            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                html += '<li class="page-item ' + (i === currentPage ? 'active' : '') + '">';
                html += '<a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>';
            }

            // Next button
            html += '<li class="page-item ' + (currentPage === totalPages ? 'disabled' : '') + '">';
            html += '<a class="page-link" href="#" data-page="' + (currentPage + 1) + '" aria-label="Next">';
            html += '<span aria-hidden="true">&raquo;</span></a></li>';

            html += '</ul></nav>';

            paginationContainer.innerHTML = html;

            // Add event listeners
            var pageLinks = paginationContainer.querySelectorAll('.page-link[data-page]');
            for (var j = 0; j < pageLinks.length; j++) {
                pageLinks[j].addEventListener('click', function(e) {
                    e.preventDefault();
                    var page = parseInt(this.getAttribute('data-page'));
                    if (page >= 1 && page <= totalPages && page !== currentPage) {
                        currentPage = page;
                        showPage(currentPage);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
            }
        }

        // Initialize
        showPage(currentPage);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPagination);
    } else {
        initPagination();
    }
})();
