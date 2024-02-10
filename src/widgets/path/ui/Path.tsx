import React from "react";
import "./path.css";
import { Link } from "react-router-dom";

type Props = {
  page: string;
  pageLevel?: string;
  link?: string;
};

function Path({ page, pageLevel, link }: Props) {
  // if (pageLevel && link) {
  //   return (
  //     <div className="path">
  //       <Link to={`/${link}`} className="path__page">
  //         {page}
  //       </Link>
  //       /<span className="path__page"> {pageLevel}</span>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="path">
  //       <span className="path__page">/ {page}</span>
  //     </div>
  //   );
  // }
}

export default Path;
