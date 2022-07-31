import React from "react";
import {
  FaRegFolder,
  FaCalculator,
  FaRegFileAlt,
  FaTrophy,
  FaClipboard,
} from "react-icons/fa";
import { MdSocialDistance } from "react-icons/md";
import "../CSS/Icons.css";

const Icons = () => {
  const IconList = [
    FaRegFolder,
    MdSocialDistance,
    FaRegFileAlt,
    FaCalculator,
    FaRegFileAlt,
    FaTrophy,
    FaRegFileAlt,
    FaClipboard,
  ];
  return (
    <section id="Icons" className="wow fadeIn">
      <div className="container ms-4">
        <div className="row no-gutters Icons-wrap clearfix wow fadeInUp">
          {IconList.map(function (Icon, i) {
            return (
              <>
                <div className="col-md-3 m-0 p-0" key={i}>
                  <div className="Icons-logo m-0">
                    <a href="">
                      <i>{<Icon />}</i>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Icons;
