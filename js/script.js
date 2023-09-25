$(document).ready(function () {
    
    // INTERAZIONE CON PEXELS API
    const apiKey = 'J8KnseuEDAzKHIiOl2EHRCyQ4RuukFOs3B4u2AoYG55wD0jX01jvdBBD'; // fornita da Pexels
    const apiUrl = 'https://api.pexels.com/v1/search'; // fornita da Pexels
    const query = 'music'; // Termine di ricerca per le immagini (in questo caso, gatti, poteva essere anche beach, cioè spiagge)
    const perPage = 20; // Numero di risultati per pagina
    
    $.ajax({
        url: `${apiUrl}?query=${query}&per_page=${perPage}`,
        type: 'GET',
        headers: {
            Authorization: apiKey,
        },
        success: function(data) {
            // I dati sono stati ricevuti correttamente
            console.log(data.photos);
            
            const container = $('#pexels-api-get');
            
            if (data.photos.length > 0) {
                data.photos.forEach(photo => {
                    const imgElement = `
                        <div class="col">
                            <div class="card h-100">
                                <img src="${photo.src.tiny}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${photo.photographer}</h5>
                                    <p class="card-text">${photo.alt}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    container.append(imgElement);
                });
            } else {
                container.html('<h1>Nessuna foto trovata.</h1>');
            }
        },
        error: function(error) {
            // Si è verificato un errore durante la richiesta
            console.error('Errore nella richiesta API:', error);
        }
        
    });
    
    
    
});
