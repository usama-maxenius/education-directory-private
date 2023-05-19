import { FC } from 'react';
import Script from 'next/script';

export const MSLandingScript: FC = ()=> {

    return (
        <Script id='microsoftPixLandingScript'>
            {`
                (function(w,d,t,r,u) {
                    var f,n,i;
                    w[u]=w[u]||[],f=function()
                    {
                        var o={ti:"137034205"};
                        o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
                    },
                    n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function()
                    {
                        var s=this.readyState;
                        s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
                    },
                    i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
                })(window,document,"script","//bat.bing.com/bat.js","uetq");
                window.uetq = window.uetq || [];
                window.uetq.push('event', 'begin_checkout', {});
            `}
        </Script>
    );
};

export const MSSchoolSearchScript: React.FC = ()=> {

    return (
        <Script id='microsoftPixSchoolSearchScript'>
            {`
                (function(w,d,t,r,u) {
                    var f,n,i;
                    w[u]=w[u]||[],f=function()
                    {
                        var o={ti:"137034205"};
                        o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
                    },
                    n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function()
                    {
                        var s=this.readyState;
                        s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
                    },
                    i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
                })(window,document,"script","//bat.bing.com/bat.js","uetq");
                window.uetq = window.uetq || [];
                window.uetq.push('event', 'register', {});
            `}
        </Script>
    );
};

export const MSThankYouScript: React.FC = ()=> {

    return (
        <Script id='microsoftPixThankYouScript'>
            {`
                (function(w,d,t,r,u) {
                    var f,n,i;
                    w[u]=w[u]||[],f=function()
                    {
                        var o={ti:"137034205"};
                        o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
                    },
                    n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function()
                    {
                        var s=this.readyState;
                        s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
                    },
                    i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
                })(window,document,"script","//bat.bing.com/bat.js","uetq");
                window.uetq = window.uetq || [];
                window.uetq.push('event', 'purchase', {});
            `}
        </Script>
    );
};