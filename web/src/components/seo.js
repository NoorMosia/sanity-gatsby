import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

function SEO({ description, lang, meta, keywords, title, image }) {
  const { site } = useStaticQuery(detailsQuery) || {};

  const metaDescription = description || site.description || "";
  const siteTitle = site.title || "";
  const siteAuthor = site.author?.name || "";

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: { image },
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: siteAuthor,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: image,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
              name: "keywords",
              content: keywords.join(", "),
            }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`;
