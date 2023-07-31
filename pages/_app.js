import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Script  id="ga-script" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-2CN95RFCCM" />
      <Script
        id="ga-script"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-2CN95RFCCM');
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
