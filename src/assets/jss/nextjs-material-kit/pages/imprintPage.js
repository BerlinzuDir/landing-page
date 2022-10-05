import { container, title } from 'src/assets/jss/nextjs-material-kit.js'

const imprintPageStyle = {
  container: {
    paddingTop: '100px',
    zIndex: '12',
    color: '#3C4858',
    ...container
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '0px',
    minHeight: '32px',
    color: '#3C4858',
    textDecoration: 'none'
  },
  subtitle: {
    fontSize: '1.813rem',
    maxWidth: '500px'
  },
  main: {
    background: '#3C4858',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  pageHeader: {
    height: '100vh'
  },
  content: {
    fontSize: '1.813rem',
    fontWeight: '100px'
  },
  email: {
    color: '#3C4858'
  }
}

export default imprintPageStyle
