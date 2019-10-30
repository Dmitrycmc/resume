import { keyframes, css } from 'styled-components/macro';

export const getFadeInCss = (cssFrom, cssTo, duration = 1000, delay = 0) => {
    const kf = keyframes`
      to {
          ${cssTo}
      }
    `;

    return css`
        animation-name: ${kf};
        animation-duration: ${duration}ms;
        animation-delay: ${delay}ms;
        animation-fill-mode: forwards;

        ${cssFrom}
    `;
};
