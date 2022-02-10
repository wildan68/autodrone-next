import React from "react";
import Head from 'next/head'
import Header from "../components/header";
import DetailComponent from "../components/detail";
import Footer from "../components/footer";
import { withRouter } from 'next/router'

class Detail extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Head>
                    <title>Detail item | Autodrone Wildan Rizky</title>
                </Head>
                <Header/>
                <DetailComponent/>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Detail)