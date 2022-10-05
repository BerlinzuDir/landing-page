import { title } from 'src/assets/jss/nextjs-material-kit.js'

const workStyle = {
  section: {
    padding: '70px 0'
  },
  title: {
    ...title,

    color: '#3C4858',
    marginBottom: '0px',
    marginTop: '0px',
    minHeight: '32px',
    textDecoration: 'none',
    textAlign: 'center'
  },

  subtitle: {
    color: 'var(--text-color)',
    fontSize: '22px',
    textAlign: 'center'
  },
  description: {
    color: 'var(--text-color)',
    fontSize: 'var(--text-size)',
    textAlign: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  textArea: {
    marginRight: '15px',
    marginLeft: '15px'
  }
}

export default workStyle
