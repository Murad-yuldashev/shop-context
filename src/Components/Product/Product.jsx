import React, { useState, useContext, useEffect } from "react";
import "./Product.css";
import { Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Contexts } from "../Context/Context";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Rating from "@mui/material/Rating";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Loading from "../../Components/Loading/Loading";
// import BasketReducer, { initialState } from "../BasketReducer/BasketReducer";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const shapeStyles = { bgcolor: "primary.main", width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: "50%" };
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const Product = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const { data, state, dispatch } = useContext(Contexts);

  const handleExpandClick = (id) => {
    console.log(id, "dsda");
    setExpanded(data.find((e) => e.id === id && true));
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }, [open]);

  const addBasket = (data) => {
    let info = state.basket.find((element) => element.id === data.id);
    if (info) {
      setOpen(true);
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: { data, count: 1 } });
    }
  };

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

  return (
    <div className="cards">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {data.length ? (
            data.map((item) => (
              <Grid key={item.id} item xs={12} md={6} lg={3}>
                <Card sx={{ padding: "2opx 0" }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.image}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <div style={{ zIndex: "0" }} className="settings">
                      <Typography variant="body2" color="text.secondary">
                        {item.title && item.title.slice(0, 20) + "..."}
                      </Typography>
                      <Badge
                        color="secondary"
                        overlap="circular"
                        badgeContent={item.rating.count}
                        max={999}
                      >
                        {circle}
                      </Badge>
                    </div>
                    <div className="settings">
                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          gap: "12px",
                        }}
                        variant="body2"
                        color="text.secondary"
                      >
                        <LocalOfferIcon />{" "}
                        {item.price &&
                          item.price.toLocaleString("uz-UZ", {
                            style: "currency",
                            currency: "uzs",
                          })}
                      </Typography>
                      <Rating
                        name="read-only"
                        value={item.rating.rate}
                        readOnly
                      />
                    </div>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <ShoppingCartIcon onClick={() => addBasket(item)} />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={() => handleExpandClick(item.id)}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>{item.description}</CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))
          ) : (
            <Loading />
          )}
        </Grid>
      </Container>
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
};

export default Product;
