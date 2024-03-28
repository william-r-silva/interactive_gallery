$(function(){
    var prevHideIndex = 0;
    var prevIndex = 1;
    var currentIndex = 2;
    var nextIndex = 3;
    var lastIndex = fotos.length-1;

    start();

    async function start(){
      await buildImages();

      setInterval(function(){
        showNextQuote();
      }, 5000);
    }

    function buildImages(){
      return new Promise((resolve) => {
        for(var foto of fotos){
          $('#carousel-container').append(`
            <div class="tile">
              <div class="tile-content">
                <div class="tile-image" style="background-image:url('${foto.url}')"></div>
                <div class="tile-text">"${foto.text}"</div>
              </div>
            </div>`
          );
        }
        showNextQuote()
        resolve();
      })
    }
    
    function showNextQuote(){
      if(currentIndex === lastIndex) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateState(currentIndex);
    }
    
    function updateState(index){
      nextIndex = index === lastIndex ? 0 : index + 1;
      currentIndex = index; 
      prevIndex = index === 0 ? lastIndex : index - 1; 
      prevHideIndex = prevIndex === 0 ? lastIndex : prevIndex - 1; 
      
      updateCarouselPosition();
    }

    function updateCarouselPosition(){
      $('#carousel-container').find('.previous-hide').removeClass('previous-hide');
      $('#carousel-container').find('.previous').removeClass('previous');
      $('#carousel-container').find('.current').removeClass('current');
      $('#carousel-container').find('.next').removeClass('next');
      
      var allQuotes = $('#carousel-container').find('.tile');
  
      $(allQuotes[prevHideIndex]).addClass('previous-hide');
      $(allQuotes[prevIndex]).addClass('previous');
      $(allQuotes[currentIndex]).addClass('current');
      $(allQuotes[nextIndex]).addClass('next');
    }
});