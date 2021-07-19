import * as styles from "./blog-post-preview-list.module.css";
import BlogPostPreview from "./blog-post-preview";
import React from "react";

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {/* <div className={styles.Banner}>
        <img
          src="https://res.cloudinary.com/ddqp6ml5t/image/upload/v1626561512/banner_g7m2ny.png"
          alt="banner"
        />
      </div> */}
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.slice(0, 4).map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
