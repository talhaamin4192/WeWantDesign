import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      }
      ,
      fontFamily: {
        "GTWalsheimPro": '"GTWalsheimPro",sans-serif',
        "Grifter": "'Grifter',sans-serif"
      },
      colors: {
        "neon": "#C9FF00",
        "white-1": "#E9E9E9",
        "purple-1": "#ebb7f5",
        "white-2": "#F9F9F9",
        "light-blue": "#e7f1fb",
        customOrange: '#fd5a1e',
        "slate-1": "#7b7b7b",
        "white-3": "#a6a6a6",
        "offwhite": "#fbfbfb",
        "b-white": "rgb(234, 234, 234)",
        "work-p": "#858585",
        "off2": "#f7f7f8",
        "red-1": "#dc501c",
        "black-2": "#101010",
        "grey-2": "#878787",
        "border-cstm": "#1e1e1e",
        "footer-1": "#dfdfdf",
        "footer-2": "#6d6d6d",
        "nav-purple": "#c46bff",
        "nav-orange": "#fd5a1e",
        "nav-blue": "#7abafb",
        '3d-blue': "#d8fced",
        "3d-pink": "#fe6ae6",
        "3d-dblue": "#6844e2",
        "3d-yellow": "#f3eb0e"


      }
      ,
      inset: {
        "22": "22px"
      }
      ,
      fontSize: {
        "12": "12px",
        "18": "18px",
        "46": "46px",
        "13": "13px",
        "34": "34px",
        "72": "72px",
        "44": "44px",
        "14": "14px",
        "22": "22px"
      }
      ,
      width: {
        "95": "95%",
        "img-width": "663px",
        "74": "72.75%"
      }
      ,
      height: {
        "img-height": "372px",
      }
      ,
      borderWidth: {
        "1": "1px"
      }
      , gridTemplateColumns: {
        "custom-c": ".6fr 1fr .8fr"
      }
      ,
      boxShadow: {
        "custom-shadow": "0px 0px 18px #ffffff85 "
      }
      ,
      spacing: {
        "custom-6": "6px",
      }
      ,
      borderRadius: {
        "45": "45px",
        "30": "30px"
      }
      ,
      padding: {
        "sm2": "2px"
      }
      ,
      backgroundImage: {
        text: "url(assets/bg-text.webp)",
        grad: "linear-gradient(8deg, #ffffff29 34%, #fff 66% 73%, #fff)",
        "grad-2": "linear-gradient(124deg, #1c1b1f 2% 34%, #11111112 64%)",
        "grad-3": "linear-gradient(124deg, #c9ff00 2% 34%, #c9ff002e 64%)"
      }
      ,
      backgroundSize: {
        h: "100% 100%"
      }
      ,
      rotate: {
        "custom-rotate": "140deg",
      },
      animation: {
        'adjust-position1': 'adjust-position linear fowards',
        "translate-width1": "translate-width 14s ease-in-out infinite",
        fontBounce: 'combinedAnimation 3s ease-in-out infinite',


      },
      keyframes: {
        'adjust-position': {
          '0%': { transform: 'translateY(calc(-100% + 100vh))' },
          '100%': { transform: 'translateY(calc(100% - 100vh))' },
        }
        ,
        'translate-width': {
          '0%': { transform: 'translateY(0)', width: '56.13px' },
          '16.6%': { transform: 'translateY(-27px)', width: '74.23px' },
          '33.3%': { transform: 'translateY(-54px)', width: '203px' },
          '49.98%': { transform: 'translateY(-81px)', width: '156.72px' },
          '66.64%': { transform: 'translateY(-108px)', width: '71.78px' },
          '83.3%': { transform: 'translateY(-135px)', width: '133.61px' },
          '100%': { transform: 'translateY(-162px)', width: '56.13px' },
        }
        ,
      }
      ,
      perspective: {
        1000: '1000px',
      }
      ,
      translate: {
        '10': '10px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}

