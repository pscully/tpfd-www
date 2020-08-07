// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

// Required for @emotion/css
import { extractCritical } from "@emotion/server";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <script src="https://paperform.co/__embed" async></script>
          <script
            data-cfasync="false"
            dangerouslySetInnerHTML={{
              __html: `const swarmoptions = {
                swarmcdnkey: "c9733bba-0b30-4c52-a534-d8e546844f33",
                iframeReplacement: "iframe",
                autoreplace: {
                  youtube: true,
                },
                theme: {
                  button: "circle",
                  primaryColor: "#ffc300",
                },
              }`,
            }}
          ></script>
          <script
            async
            data-cfasync="false"
            src="https://assets.swarmcdn.com/cross/swarmdetect.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
