import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { shape, string } from 'prop-types';

const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        siteUrl
        title
        description
        image
        social {
          twitter
        }
      }
    }
  }
`;

const render = ({
  site: {
    siteMetadata: {
      siteUrl,
      title,
      description,
      image,
      social: { twitter },
    },
  },
}) => (
  <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
    <html lang="en" />
    <link rel="canonical" href={siteUrl} />
    <link rel="icon" type="image/png" href={image} />
    <meta
      httpEquiv="cache-control"
      content="public,max-age=31536000,immutable"
    />
    <link rel="dns-prefetch" href="https://cdn-images-1.medium.com" />
    <link rel="dns-prefetch" href="https://scontent-ort2-1.cdninstagram.com" />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-131029592-1"
    ></script>
    <script>{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-131029592-1');
    `}</script>
    <meta name="docsearch:version" content="2.0" />
    <meta name="description" content={description} />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
    />

    <meta property="og:url" content={siteUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en" />
    <meta property="og:site_name" content={title} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="360" />
    <meta property="og:image:height" content="360" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={twitter} />
    <meta name="twitter:site" content={siteUrl} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    <script>
      {`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1355687,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `}
    </script>
  </Helmet>
);
render.propTypes = {
  site: shape({
    siteMetadata: shape({
      siteUrl: string,
      title: string,
      description: string,
      image: string,
      social: shape({ twitter: string }),
    }),
  }).isRequired,
};

export const SiteMetadata = () => <StaticQuery query={query} render={render} />;

export default SiteMetadata;
