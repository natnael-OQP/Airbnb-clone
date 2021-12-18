import Default from '../layout/Default'
import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 2,
    color: "#FE595E",  
    className: "z-50",
    delay: 100,
  });

  Router.events.on('routeChangeStart', () => progress.start());
  Router.events.on('routeChangeComplete', () => progress.finish());

  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  )
}

export default MyApp
