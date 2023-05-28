import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComment from "../CardComment/CardComment";
import PostComment from "../CrearComment/PostComment";
import { getComentarios } from "../../../redux/Actions/index";
import styles from "./Comment.module.css";
import {
  Box,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";


const Comment = ({ usuario }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comentarios);

  useEffect(() => {
    dispatch(getComentarios());
  }, [dispatch]);

  const sliderRef = useRef(null);

  const handlePostComment = () => {
    dispatch(getComentarios());
  };

  const handleSliderPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleSliderNext = () => {
    sliderRef.current.slickNext();
  };

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const sliderSettings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1, 
    slidesToScroll: 1, 
  };

  return (
    <div >
      <div className={styles.containerReviews}>
        <h2 className={styles.title}>REVIEWS</h2>
      </div>
      <div className={styles.postBoton}>
        <PostComment usuario={usuario} onPostComment={handlePostComment} />
      </div>

      <div className={styles.reviewList}>
      <Box position={"relative"} height={"280px"} width={"full"} overflow={"hidden"}>
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={handleSliderPrev}
          >
            <BiLeftArrowAlt size="40px" />
          </IconButton>
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={handleSliderNext}
          >
            <BiRightArrowAlt size="40px" />
          </IconButton>
          <Slider {...sliderSettings} ref={sliderRef} className={styles.slider}>
          {comments?.map((comment) =>
          comment.isBanned ? (
            <></>
          ) : (
            <div key={comment.id}>
              <CardComment
                id={comment.id}
                texto={comment.texto}
                nombreClase={comment.nombreClase}
                nombreCliente={comment.nombreCliente}
                imagenCliente={comment.picture}
              />
            </div>
          )
        )}
          </Slider>
        </Box>
      </div>
    </div>
  );
};

export default Comment;
