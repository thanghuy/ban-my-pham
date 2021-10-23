import Head from 'next/head'
import React from 'react'
import HomeModulem from '../src/modules/homes'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Trang chủ - Nguyễn Hồng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeModulem />
    </React.Fragment>
  )
}
