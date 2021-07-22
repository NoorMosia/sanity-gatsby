import * as styles from "./author-list.module.css";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function AuthorList({ items, title }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>{title}</h2>
      <ul className={styles.list}>
        {items.map(({ author, _key }) => {
          const authorName = author && author.name;
          return (
            <li key={_key} className={styles.listItem}>
              <div>
                <div className={styles.avatar}>
                  {author && author.image && author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit("crop")
                        .url()}
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </li>
          );
        })}
        <div className={styles.Socials}>
          <a href="https://twitter.com/mosia_fpl">
            <img
              alt="twitter"
              src="https://res.cloudinary.com/ddqp6ml5t/image/upload/v1626913360/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com_nnwdup.png"
            />
          </a>
          <a href="https://www.instagram.com/footy_za/">
            <img
              alt="instagram"
              src="https://res.cloudinary.com/ddqp6ml5t/image/upload/v1626913359/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com_wsm0vj.png"
            />
          </a>
        </div>
      </ul>
    </div>
  );
}

export default AuthorList;
