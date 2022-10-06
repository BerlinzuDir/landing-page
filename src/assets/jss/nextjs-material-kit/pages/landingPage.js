import { container, title } from 'src/assets/jss/nextjs-material-kit.js'

const landingPageStyle = {
  section: {
    padding: '70px 0'
  },
  html: {
    scrollBehavior: 'smooth'
  },
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    minHeight: '100vh',
    ...container
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0'
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  }
}

export default landingPageStyle
