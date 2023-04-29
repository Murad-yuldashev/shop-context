import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Contexts } from "../Context/Context";
// web.cjs is required for IE11 support
// import { animated } from "react-spring/web.cjs";

// const Fade = React.forwardRef(function Fade(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   // const style = useSpring({
//   //   from: { opacity: 0 },
//   //   to: { opacity: open ? 1 : 0 },
//   //   onStart: () => {
//   //     if (open && onEnter) {
//   //       onEnter();
//   //     }
//   //   },
//   //   onRest: () => {
//   //     if (!open && onExited) {
//   //       onExited();
//   //     }
//   //   },
//   // });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });


const style = {
  position: "fixed",
  top: "100px",
  left: "40px",
  width: "400px",
  bgcolor: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SpringModal() {
  
  const {open, setOpen} = React.useContext(Contexts);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="spring-modal-title" variant="h6" component="h2">
            Siz bu tovarni tanla boldingiz
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
