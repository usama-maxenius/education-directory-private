import { FC } from 'react';
import { ADROLL_ADV_ID, ADROLL_PIX_ID, ADROLL_VERSION } from '@/appConstants';
import Script from 'next/script';

export const ARLandingScript: FC = ()=> {

    return (
        <Script id='adrollPixLandingScript'>
            {`
                (function(adv_id, pix_id, version) {
                    adroll_adv_id = adv_id;
                    adroll_pix_id = pix_id;
                    adroll_version = version;
                    console.log(adroll_adv_id, adroll_pix_id, adroll_version);
                    (function(w, d, e, o, a) {
                        w.__adroll_loaded = true;
                        w.adroll = w.adroll || [];
                        w.adroll.f = [ 'setProperties', 'identify', 'track' ];
                        var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                        + "/roundtrip.js";
                        for (a = 0; a < w.adroll.f.length; a++) {
                            w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                                return function() {
                                    w.adroll.push([ n, arguments ])
                                }
                            })(w.adroll.f[a])
                        }
                        e = d.createElement('script');
                        o = d.getElementsByTagName('script')[0];
                        e.async = 1;
                        e.src = roundtripUrl;
                        o.parentNode.insertBefore(e, o);
                    })(window, document);
                    adroll.track("pageView");
                })("${ADROLL_ADV_ID}", "${ADROLL_PIX_ID}", "${ADROLL_VERSION}")
            `}
        </Script>
    );
};

export const ARSchoolSearchScript: React.FC = ()=> {

    return (
        <Script id='adrollPixSchoolSearchScript'>
            {`
                (function(adv_id, pix_id, version) {
                    adroll_adv_id = adv_id;
                    adroll_pix_id = pix_id;
                    adroll_version = version;
                    (function(w, d, e, o, a) {
                        w.__adroll_loaded = true;
                        w.adroll = w.adroll || [];
                        w.adroll.f = [ 'setProperties', 'identify', 'track' ];
                        var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                        + "/roundtrip.js";
                        for (a = 0; a < w.adroll.f.length; a++) {
                            w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                                return function() {
                                    w.adroll.push([ n, arguments ])
                                }
                            })(w.adroll.f[a])
                        }
                        e = d.createElement('script');
                        o = d.getElementsByTagName('script')[0];
                        e.async = 1;
                        e.src = roundtripUrl;
                        o.parentNode.insertBefore(e, o);
                    })(window, document);
                    adroll.track("pageView");
                    adroll.track("productView", {"products":[{}]});
                })("${ADROLL_ADV_ID}", "${ADROLL_PIX_ID}", "${ADROLL_VERSION}")
            `}
        </Script>
    );
};

export const ARThankYouScript: React.FC = ()=> {

    return (
        <Script id='adrollPixThankYouScript'>
            {`
                (function(adv_id, pix_id, version) {
                    adroll_adv_id = adv_id;
                    adroll_pix_id = pix_id;
                    adroll_version = version;

                    (function(w, d, e, o, a) {
                        w.__adroll_loaded = true;
                        w.adroll = w.adroll || [];
                        w.adroll.f = [ 'setProperties', 'identify', 'track' ];
                        var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                        + "/roundtrip.js";
                        for (a = 0; a < w.adroll.f.length; a++) {
                            w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                                return function() {
                                    w.adroll.push([ n, arguments ])
                                }
                            })(w.adroll.f[a])
                        }

                        e = d.createElement('script');
                        o = d.getElementsByTagName('script')[0];
                        e.async = 1;
                        e.src = roundtripUrl;
                        o.parentNode.insertBefore(e, o);
                    })(window, document);
                    adroll.track("pageView");
                    adroll.track("purchase", {
                        "order_id": "{lead Id}",
                        "currency": "USD",
                        "conversion_value": "{sum of school payout}"
                    });
                })("${ADROLL_ADV_ID}", "${ADROLL_PIX_ID}", "${ADROLL_VERSION}")
            `}
        </Script>
    );
};