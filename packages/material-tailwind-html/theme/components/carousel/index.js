const carousel = (theme) => ({
  ".carousel": {
    width: "100%",
    "max-width": "800px",
    "min-height": "450px",
    position: "relative",
    overflow: "hidden",
    "border-radius": ".5rem",

    ".slide": {
      width: "100%",
      "max-width": "800px",
      "min-height": "450px",
      position: "absolute",
      transition: "all 0.5s",

      img: {
        width: "100%",
        height: "100%",
        "object-fit": "cover"
      }
    },

    "button": {
      position: "absolute",
      "z-index": "10",

      i: {
        "font-size": "2.25rem",
        opacity: ".8"
      },

      "&:hover": {
        i: {
          opacity: "1"
        }
      }
    },

    ".button-prev": {
      top: "45%",
      left: "2%"
    },
    
    ".button-next": {
      top: "45%",
      right: "2%"
    }
  }
});

module.exports.carousel = carousel;
