import Default from '../layout/Default'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  )
}

export default MyApp
