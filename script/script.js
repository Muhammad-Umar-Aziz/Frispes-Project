// Get the carousel element
const carouselElement = document.getElementById("carouselExampleIndicators");
    
// Set a new interval time (in milliseconds)
const newIntervalTime = 4000; // 2 seconds

// Find the carousel object from the element
const carousel = new mdb.Carousel(carouselElement, {
  interval: newIntervalTime,
});

// Automatically start the carousel
carousel.cycle();





//--------------------------For Upper Slider-------------------------
$('.slick-slider').slick({
    
arrows:false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
       slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
       slidesToShow: 1
      }
    }
  ]
});
let totalSlides = $('.slick-slider').slick('getSlick').slideCount;
updateSlideInfo(totalSlides, 0); // Display initial slide info

// Function to update the slide counter and progress bar
function updateSlideInfo(currentSlide, progress) {
  const slideCounter = document.getElementById('slideCounter');
  const progressBar = document.querySelector('.progress-bar');

  const formattedSlide = currentSlide < 10 ? `0${currentSlide}` : `${currentSlide}`;
  slideCounter.textContent = `${formattedSlide}/${totalSlides}`;
  progressBar.style.width = `${progress}%`;
  progressBar.style.backgroundColor = 'red';
}

// Update the slide counter and progress bar on beforeChange event
$('.slick-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  const remainingSlides = totalSlides - (nextSlide + 1);
  const progress = ((remainingSlides) / (totalSlides - 1)) * 100; // -1 for 0-based indexing
  updateSlideInfo(remainingSlides + 1, progress);
});



  // Custom button functionality 
 $('.next-button').click(function () {
            $('.slick-slider').slick('slickNext');
        });
        $('.prev-button').click(function () {
            $('.slick-slider').slick('slickPrev');
        });
        let previousButtonId = null;
        function changeImage(imageId) {
            if (previousButtonId === imageId) {
                return; // If the same button is clicked again, do nothing
            }
            const image = document.getElementById(imageId);
            const defaultImageSrc = imageId === 'mainImage' ? 'images/left_arrow_default.png' : 'images/right_arrow_default.png';
            const redImageSrc = imageId === 'mainImage' ? 'images/left_red.png' : 'images/right_red.png';
            // Toggle between default and red images for the respective button
            if (image.src.includes(defaultImageSrc)) {
                image.src = redImageSrc; // Change the image to red
            } else {
                image.src = defaultImageSrc; // Reset to the default image
            }
            // Reset the previously clicked button's image to its default state
            if (previousButtonId !== null) {
                const previousButtonImage = document.getElementById(previousButtonId);
                const previousDefaultImageSrc =
                previousButtonId === 'mainImage' ? 'images/left_arrow_default.png' : 'images/right_arrow_default.png';
                previousButtonImage.src = previousDefaultImageSrc;
                previousButtonImage.classList.remove('no-outline'); // Remove the "no-outline" class
            }
             previousButtonId = imageId; // Update the previous button ID
            image.classList.add('no-outline'); // Apply the "no-outline" class to the clicked button
        }
        // ----------------Upper Slider End-------------------------
        // all facilities section start
        
 
         // all facilities section end
        // Immersive slider start

        $('.slick-slider-immersive').slick({
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 5,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 280,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
          ]
        });
        
        
        // Custom button functionality
        $('.next-button3').click(function () {
          $('.slick-slider-immersive').slick('slickNext');
        });
        
        $('.prev-button3').click(function () {
          $('.slick-slider-immersive').slick('slickPrev');
        });
        
        // Get all the image elements and add click event listeners
        const imagess = document.querySelectorAll('.slick-slider-immersive img');
        let previousButtonId3 = null;
        
        imagess.forEach(image => {
          image.addEventListener('click', function () {
            const imageId = this.id;
            changeImage3(imageId);
          });
        });
        
        function changeImage3(imageId) {
          if (previousButtonId3 === imageId) {
            return; // If the same button is clicked again, do nothing
          }
        
          const image3 = document.getElementById(imageId);
          const defaultImageSrc3 = imageId === 'mainImage5' ? 'images/left_arrow_default.png' : 'images/right_arrow_default.png';
          const redImageSrc3 = imageId === 'mainImage5' ? 'images/left_red.png' : 'images/right_red.png';
        
          // Toggle between default and red images for the respective button
          if (image3.src.includes(defaultImageSrc3)) {
            image3.src = redImageSrc3; // Change the image to red
          } else {
            image3.src = defaultImageSrc3; // Reset to the default image
          }
        
          // Reset the previously clicked button's image to its default state
          if (previousButtonId3 !== null) {
            const previousButtonImage3 = document.getElementById(previousButtonId3);
            const previousDefaultImageSrc3 = previousButtonId3 === 'mainImage5' ? 'images/left_arrow_default.png' : 'images/right_arrow_default.png';
            previousButtonImage3.src = previousDefaultImageSrc3;
            previousButtonImage3.classList.remove('no-outline'); // Remove the "no-outline" class
          }
        
          previousButtonId3 = imageId; // Update the previous button ID
          image3.classList.add('no-outline'); // Apply the "no-outline" class to the clicked button
        }
        
        
        // Immersive slider end
        // --------------Social Media Slider Start------------------
        $('.slick-slider-social-media').slick({
          arrows: false,
          autoplay:true,
          autoplaySpeed:2000,
          slidesToShow: 6,
          
          responsive: [
            {
              breakpoint: 992,
              settings: {
                autoplay:true,
                autoplaySpeed:1500,
                arrows: false,
                slidesToShow: 4,
               
              }
            },
            {
              breakpoint: 768,
              settings: {
                autoplay:true,
                autoplaySpeed:1500,
                arrows: false,
                slidesToShow: 3,
               
              }
            },
            {
              breakpoint: 480,
              settings: {
                autoplay:true,
                autoplaySpeed:1500,
                arrows: false,
                slidesToShow: 1,
              
              }
            },
            {
              breakpoint: 280,
              settings: {
                autoplay:true,
                autoplaySpeed:1500,
                arrows: false,
                slidesToShow: 1,
               
              }
            }
          ]
        });
        
          // --------------Social Media Slider End------------------
        //-----------------Last Slider Start-------------------------
        // Initialize the slick slider
$('.slick-slider-last').slick({
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

// Custom button functionality
$('.next-button2').click(function () {
  $('.slick-slider-last').slick('slickNext');
});

$('.prev-button2').click(function () {
  $('.slick-slider-last').slick('slickPrev');
});

// Get all the image elements and add click event listeners
const images = document.querySelectorAll('.slick-slider-last img');
let previousButtonId2 = null;

images.forEach(image => {
  image.addEventListener('click', function () {
    const imageId = this.id;
    changeImage2(imageId);
  });
});

function changeImage2(imageId) {
  if (previousButtonId2 === imageId) {
    return; // If the same button is clicked again, do nothing
  }

  const image2 = document.getElementById(imageId);
  const defaultImageSrc2 = imageId === 'mainImage3' ? 'images/left_arrow_default.png' : 'images/right_arrow_default.png';
  const redImageSrc2 = imageId === 'mainImage3' ? 'images/left_red.png' : 'images/right_red.png';

  // Toggle between default and red images for the respective button
  if (image2.src.includes(defaultImageSrc2)) {
    image2.src = redImageSrc2; // Change the image to red
  } else {
    image2.src = defaultImageSrc2; // Reset to the default image
  }

  // Reset the previously clicked button's image to its default state
  if (previousButtonId2 !== null) {
    const previousButtonImage2 = document.getElementById(previousButtonId2);
    const previousDefaultImageSrc2 = previousButtonId2 === 'mainImage3' ? 'images/left_arrow_default.png' : 'images/right_arrow_default.png';
    previousButtonImage2.src = previousDefaultImageSrc2;
    previousButtonImage2.classList.remove('no-outline'); // Remove the "no-outline" class
  }

  previousButtonId2 = imageId; // Update the previous button ID
  image2.classList.add('no-outline'); // Apply the "no-outline" class to the clicked button
}
