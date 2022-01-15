let slides;
let itemWidth;

  const scrollStart = (slides) => {
    return slides.scrollLeft === 0;
  }
  
  const scrollEnd  = (slides) => {
    return slides.scrollLeft + slides.offsetWidth === slides.scrollWidth;
  }




 export const nextItem = () => {
    slides = document.getElementById(`slider`);
    itemWidth = document.querySelector('.slide').offsetWidth;
    if (scrollEnd(slides)) {
      slides.scrollLeft = 0;
    } else {
      slides.scrollLeft += itemWidth ;
    }
  

  }

  export const prevItem = () => {
    slides = document.getElementById(`slider`);
    itemWidth = document.querySelector('.slide').offsetWidth;
    if (scrollStart(slides)) {
      slides.scrollLeft += slides.scrollWidth;
    } else {
      slides.scrollLeft -= itemWidth;
    }
  }


