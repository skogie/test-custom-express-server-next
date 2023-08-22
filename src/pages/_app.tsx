import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { NextPageResponse } from '../interfaces/utils';

type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <>
      <p>Data: {example}</p>
      <Component {...pageProps} />
    </>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const locals = (context.ctx.res as Pick<NextPageResponse, 'locals'>)?.locals;
  const myData = locals?.data ?? 'My bad data'
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: myData }
}