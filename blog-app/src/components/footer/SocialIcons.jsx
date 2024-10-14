import { PropTypes } from "prop-types"

function FbIcon({ className }) {
  FbIcon.propTypes = {
    className: PropTypes.string,
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <title>facebook</title>
      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
    </svg>
  )
}

function YtIcon({ className }) {
  YtIcon.propTypes = {
    className: PropTypes.string,
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <title>youtube</title>
      <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
    </svg>
  )
}

function InstaIcon({ className }) {
  InstaIcon.propTypes = {
    className: PropTypes.string,
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <title>instagram</title>
      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
    </svg>
  )
}

function LinkedinIcon({ className }) {
  LinkedinIcon.propTypes = {
    className: PropTypes.string,
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <title>linkedin</title>
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
    </svg>
  )
}

function Logo({ className }) {
  Logo.propTypes = {
    className: PropTypes.string,
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <title>logo</title>
      <path d="M19 10C18.44 10 17.91 10.11 17.41 10.28L14.46 4.5H11V6H13.54L14.42 7.72L12 13.13L10.23 8.95C10.5 8.85 10.74 8.58 10.74 8.25C10.74 7.84 10.41 7.5 10 7.5H8C7.58 7.5 7.24 7.84 7.24 8.25S7.58 9 8 9H8.61L10.86 14.25H9.92C9.56 11.85 7.5 10 5 10C2.24 10 0 12.24 0 15S2.24 20 5 20C7.5 20 9.56 18.15 9.92 15.75H12.5L15.29 9.43L16.08 10.96C14.82 11.87 14 13.34 14 15C14 17.76 16.24 20 19 20S24 17.76 24 15 21.76 10 19 10M5 18.5C3.07 18.5 1.5 16.93 1.5 15S3.07 11.5 5 11.5C6.67 11.5 8.07 12.68 8.41 14.25H4V15.75H8.41C8.07 17.32 6.67 18.5 5 18.5M19 18.5C17.07 18.5 15.5 16.93 15.5 15C15.5 13.92 16 12.97 16.77 12.33L18.57 15.85L19.89 15.13L18.1 11.63C18.39 11.56 18.69 11.5 19 11.5C20.93 11.5 22.5 13.07 22.5 15S20.93 18.5 19 18.5Z" />
    </svg>
  )
}

function MenuIcon({ className }) {
  MenuIcon.propTypes = {
    className: PropTypes.string,
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <title>menu</title>
      <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>
  )
}

export { FbIcon, YtIcon, InstaIcon, LinkedinIcon, Logo, MenuIcon }
