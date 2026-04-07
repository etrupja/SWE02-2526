const settings = {
    async: true,
    crossDomain: true,
    url: 'https://sportapi7.p.rapidapi.com/api/v1/sport/football/categories',
    method: 'GET',
    headers: {
        'x-rapidapi-key': '549e48659amsh88ff09ae2bf498dp16698bjsn532fd8d156b0',
        'x-rapidapi-host': 'sportapi7.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

$('#get-categories').on('click', function () {
    $.ajax(settings).done(function (response) {
const $list = $('#categories-list');
        $list.empty();

        const categories = response.categories || response;

        if (!categories || categories.length === 0) {
            $list.html('<p class="text-danger">No categories found.</p>');
            return;
        }

        categories.forEach(function (category) {
            const card = `
                <div class="col-md-3 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${category.name}</h5>
                            <p class="card-text text-muted">${category.sport ? category.sport.name : ''}</p>
                        </div>
                    </div>
                </div>
            `;
            $list.append(card);
        });
    });
});
