export const textVariant = (delay) => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  } else {
    return "";
  }
};

export const textVariantDevice = (delay) => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    console.log("Text: isDesktop")
    return textVariant(delay);
  } else {
    console.log("Text: isMobile")
    return "";
  }
};

export const fadeIn = (direction, type, delay, duration) => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  } else {
    return "";
  }
  
};

export const fadeInDevice = (direction, type, delay, duration) => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    console.log("Fade In: isDesktop")
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  } else {
    console.log("Fade In: isMobile")
    return "";
  }
};

export const zoomIn = (delay, duration) => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  } else {
    return "";
  }
};

export const slideIn = (direction, type, delay, duration) => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  } else {
    return "";
  }
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  const isDesktop = window.innerWidth >= 600;
  if (isDesktop) {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  } else {
    return "";
  }
};
