import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <ViewportMetaLink/> 
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}


const ViewportMetaLink = () => (
    <div>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="icon" href="/favicon.png" type="png" />
    </div>
  )
export default MyDocument

