import Head from 'next/head'
import React from 'react'
import LayOutWeb from "../src/layouts"

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayOutWeb>
          gs
      </LayOutWeb>
    </React.Fragment>
  )
}
