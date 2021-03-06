import Head from 'next/head';
import Navigation from './Navigation';

const MasterPage = (props) =>(
  <div>
    <Head>
      <title>BitCoinAPP</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
    </Head>
    <Navigation/>
    <div className="container mt-4">
      {props.children}
    </div>
  </div>
)

export default MasterPage;