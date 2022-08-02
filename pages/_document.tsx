import Document, { Html, Main, Head, NextScript, DocumentContext, DocumentInitialProps } from "next/document";


class MyDocument extends Document {

	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render(): JSX.Element {
		return (
			<Html lang="ru">
				<Head>
					<title key={1}>Toni Movies</title>
					<link rel="icon" href="/favicon.ico" />
					<body>
					<Main/>
					<NextScript/>
					</body>
				</Head>
			</Html>
		)
	}
}

export default MyDocument;