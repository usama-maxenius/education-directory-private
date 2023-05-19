import { FC } from 'react';
import Script from 'next/script';
import IFrame from '../components/IFrame';
import { ARLandingScript } from './AdrollPixel';
import { FBLandingScript } from './FacebookPixel';

const Scripts: FC = ()=> {

    return (
        <>
            <Script src='https://www.googletagmanager.com/gtag/js?id=G-3YBRQ9S2R1' />
            <Script id='googletagmanager'>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){
                    dataLayer?.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-3YBRQ9S2R1');
            `}
            </Script>
            <Script id='gtm'>
            {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-W4VSCQS');
            `}
            </Script>
            <IFrame src='https://www.googletagmanager.com/ns.html?id=id=GTM-W4VSCQS' />
            <ARLandingScript />
            <FBLandingScript />
        </>
    );
};

export default Scripts;