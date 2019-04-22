import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Thank you!</h1>
    <p>We have received your submission. We will reply directly within 1-2 business days.</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
