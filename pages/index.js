import React from 'react'
import Header from '../components/header'
import HomeDrone from '../components/home'
import Feature from '../components/feature'
import Benefit from '../components/benefit'
import Product from '../components/product'
import Testimoni from '../components/testimoni'
import Footer from '../components/footer'
import { withRouter } from 'next/router'

class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Header />
        <HomeDrone />
        <Feature />
        <Benefit />
        <Product />
        <Testimoni />
        <Footer />
      </div>
    )
  }
}

export default withRouter(Home)