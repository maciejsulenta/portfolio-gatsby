import React from "react";
import { graphql, Link } from "gatsby";
import CursorManager from "../../components/CustomCursor/CursorManager";
import CustomCursor from "../../components/CustomCursor";

export default function Projekt({
  data: {
    datoCmsProject: { title, image, info },
  },
}) {
  return (
    <>
      {/* <CustomCursor /> */}
      <h1>{title}</h1>
      <img src={image.url} alt={image.filename} />
      {JSON.parse(info).map((element) => (
        <p key={element}>
          <span>{element}</span>
        </p>
      ))}
      <Link to="/projekty">Wróć do projektów</Link>
    </>
  );
}

export const query = graphql`
  query ($id: String) {
    datoCmsProject(id: { eq: $id }) {
      info
      image {
        filename
        url
      }
      slug
      title
      id
    }
  }
`;
