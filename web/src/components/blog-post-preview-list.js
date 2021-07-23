import * as styles from "./blog-post-preview-list.module.css";
import BlogPostPreview from "./blog-post-preview";
import React from "react";
import SEO from "../components/seo";

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <SEO
        title="footy ZA"
        description="Football blog by Mosia Noor-Tshepo"
        image="https://cdn.sanity.io/images/3rw4tk2q/production/c277cc856aab9f6f5a878ac31c74ad8deb8d5e76-1350x759.jpg?rect=0,0,1349,759&w=1200&h=675&fit=crop&auto=format"
      />
      {/* <div className={styles.Banner}>
        <img
          src="https://res.cloudinary.com/ddqp6ml5t/image/upload/v1626561512/banner_g7m2ny.png"
          alt="banner"
        />
      </div> */}
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node) => (
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
