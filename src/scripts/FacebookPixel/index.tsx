import { FC } from 'react';
import Script from 'next/script';

export const FBLandingScript: FC = ()=> {

    return (
        <Script id='facebookPixLandingScript'>
            {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '768178520678945'); 
                fbq('track', 'PageView');
                fbq('track', 'InitiateCheckout');
            `}
        </Script>
    );
};

export const FBSchoolSearchScript: React.FC = ()=> {

    return (
        <Script id='facebookPixSchoolSearchScript'>
            {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '768178520678945'); 
                fbq('track', 'PageView');
                fbq('track', 'CompleteRegistration');
            `}
        </Script>
    );
};

export const FBThankYouScript: React.FC = ()=> {

    return (
        <Script id='facebookPixThankYouScript'>
            {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '768178520678945'); 
                fbq('track', 'PageView');
                fbq('track', 'Purchase', {value: {revenue}, currency: 'USD'});
            `}
        </Script>
    );
};