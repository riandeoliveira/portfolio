export const fadeIn = () => {
  return `@keyframes fade-in {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }`;
};

export const orbit = () => {
  return `@keyframes orbit {
        to {
          transform: rotate(360deg);
        }
      }`;
};

export const rotate = () => {
  return `@keyframes rotate {
        50% {
          transform: rotateY(180deg);
        }
    
        to {
          transform: rotateY(0deg);
        }
      }`;
};
