import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-b from-black via-blue-950 to-black'>
        {/* <Header /> */}
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
