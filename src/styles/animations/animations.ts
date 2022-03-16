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
