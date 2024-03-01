import "./style.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Icon } from "../icon/Icon";

type Props = {
  children: React.ReactNode;
  style: string;
};

const settings = {
  arrow: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <Icon type="next" />,
  prevArrow: <Icon type="prev" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export function Carousel({ children, style }: Props) {
  return (
    <div>
      <Slider className={style} {...settings}>
        {children}
      </Slider>
    </div>
  );
}
