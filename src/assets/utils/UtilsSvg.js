export const Caballo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70.851 72.115"
      {...props}
    >
      <g
        id="Grupo_16"
        data-name="Grupo 16"
        transform="translate(-1852.433 -327)"
      >
        <path
          id="Trazado_44"
          data-name="Trazado 44"
          d="M1647.684,506.038l.432.89,1.219.683,1.143-.323.551-.955,6.887-3.5,1.68,2.221-.191,4.094s-6.464-.607-6.56-.576-1.4,1.278-1.4,1.278l-.406,6.3,1.014.737,2.539,1.651.839-1.63-.145-1.215-2.435-.125.215-4.411.682-.724,6.1,3.479,1.989.457,1.982-.438,6.954,4.319,9.17,1.435,2.751,3.843,7.049,5.849,1.559,6.424,1.821,3.613,1.119.8.83-.8v-2.11l-.766-.32-.958.288-.576-9.206-2.932-6.121,1.868-5.093.106-2.562-1.151-2.014,2.959.534,1.011,7.409,2.348,3.947.217-2.486.96.863.791,1.383.406-2.893.96.831-.408-2.269-2.757-5.786-3.1-2.525-5.282-1.119-3.674-2.208-5.971-1.332-.624-.5.48-.191,1.118-.338.069-1-1.69.168-3.812.012-2.553-.73,4.315-1.956,1.678-.683,1.091-1.283-.085-1.883-.887-1.21-1.443-.827-2.142-1.846-2.832-1.654-1.3-.33-1.209.113.527-1.127-.1-1.15-.527-.792-1.174-.624h-1.319l-1.125.673-.575,1.127-.816.2v.2l1.223.24.143.631-.112.9.384-.017.3,1.191.392.088.887-.36.583.184-.44.719-.167,1,.036,2.589-1.487-.291-.323-.546-.443-.009-1.473.884-3.029-2.642-3.235-1.464-2.937-.367-2.749.825-1.029-.1-2.366-.863,1.127,2.4.112.463-.559,2.51.24.927-.6,3.547-.543,1.664Zm20.374-4.18-3.812-3.254.671-.47.387.224.3.192,2.333,1.582.767-.177.968-2.765,1.582.911,2.078.32.669.223-3.81,2.765-1.158.759-.353-.823-.527-.063Zm-16.646,3.659,1.293-2.156,1.377-.637,1-1.166.2-1.869,2.308,2.709Z"
          transform="translate(2279.286 2070.446) rotate(-120)"
          fill="#aaa"
        />
        <circle
          id="Elipse_1"
          data-name="Elipse 1"
          cx="2.5"
          cy="2.5"
          r="2.5"
          transform="translate(1885.689 327)"
          fill="#aaa"
        />
      </g>
    </svg>
  );
};

export const Linea = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 31" {...props}>
      <g
        id="Grupo_17"
        data-name="Grupo 17"
        transform="translate(-2019.689 -1715)"
      >
        <g id="Grupo_16" data-name="Grupo 16" transform="translate(28 3)">
          <circle
            id="Elipse_8"
            data-name="Elipse 8"
            cx="2.5"
            cy="2.5"
            r="2.5"
            transform="translate(1991.689 1738)"
            fill="#aaa"
          />
          <circle
            id="Elipse_9"
            data-name="Elipse 9"
            cx="2.5"
            cy="2.5"
            r="2.5"
            transform="translate(1991.689 1729)"
            fill="#aaa"
          />
          <circle
            id="Elipse_10"
            data-name="Elipse 10"
            cx="2.5"
            cy="2.5"
            r="2.5"
            transform="translate(1991.689 1712)"
            fill="#aaa"
          />
          <circle
            id="Elipse_11"
            data-name="Elipse 11"
            cx="2.5"
            cy="2.5"
            r="2.5"
            transform="translate(1991.689 1720)"
            fill="#aaa"
          />
        </g>
      </g>
    </svg>
  );
};

export const Loader = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        strokeWidth="8"
        stroke="#cd9746"
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="23"
        strokeWidth="8"
        stroke="#a0a09c"
        strokeDasharray="36.12831551628262 36.12831551628262"
        strokeDashoffset="36.12831551628262"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;-360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
};
