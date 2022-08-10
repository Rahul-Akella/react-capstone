import React from "react";
import { Input, Button, Form, Carousel, Rate, notification } from "antd";
import "./App.css";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

type NotificationType = "success" | "info" | "warning" | "error";

const openNotificationWithIcon = (type: NotificationType) => {
  notification[type]({
    message: "Table Reserved",
    description:
      "Your Table has been Successfully Reserved under your name, Please check back with the restaurant.",
  });
};

const openNotificationWithIconErr = (type: NotificationType) => {
  notification[type]({
    message: "Table Reservation Failed",
    description:
      "Your Table Reservation Failed, Please check back with the restaurant.",
  });
};

function App() {
  const onFinish = (values) => {
    const addObj = {
      firstName: values.firstName ? values.firstName : "",
      lastName: values.lastName ? values.lastName : "",
      phone: values.phone ? values.phone : "",
      email: values.email ? values.email : "",
    };
    //console.log("addObj", addObj);
    fetch("https://table-service.herokuapp.com/tables/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        addObj.firstName &&
          addObj.lastName &&
          addObj.phone &&
          addObj.email == ""
          ? []
          : addObj
      ),
    })
      .then((response) => {
        if (
          response.status === 200 ||
          response.status === 201 ||
          response.status === 204 ||
          response.status === 304
        ) {
          openNotificationWithIcon("success");
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App">
      <div class="wrapper">
        <header class="main-header">
          <div class="left-part">
            <a class="logo" href="#wrapper">
              <h2>Spicy</h2>
            </a>
          </div>
          <div class="right-part">
            <nav class="main-nav">
              <ul>
                <li>
                  <a class="scroll" href="#wrapper">
                    Home
                  </a>
                </li>
                <li>
                  <a class="scroll" href="#resto">
                    Resto
                  </a>
                </li>
                <li>
                  <a class="scroll" href="#menu">
                    Menu
                  </a>
                </li>
                <li>
                  <a class="scroll" href="#reservation">
                    Reservation
                  </a>
                </li>
                <li>
                  <a class="scroll" href="#gallery">
                    Gallery
                  </a>
                </li>
                <li>
                  <a class="scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <section id="wrapper" class="main-hero">
            <div class="inner-hero">
              <div class="inner-hero-content">
                <div class="inside-container">
                  <h1 class="large">delicious indian food</h1>
                  <p class="tagLine">Making delicious indian food since 1990</p>
                </div>
              </div>
            </div>
          </section>
          <section id="resto" class="second-hero">
            <div class="second-inner-hero">
              <div class="inside-container-1">
                <h1 class="resto-heading">THE RESTAURANT</h1>
                <p class="resto-subheading">Welcome To Spicy Restaurant</p>
              </div>
              <div class="inside-container-2">
                <div class="left-images">
                  <div class="left-upper-image-container">
                    <div class="left-upper-image-background"></div>
                  </div>
                  <div class="left-bottom-image-container">
                    <div class="left-bottom-image-background"></div>
                  </div>
                </div>
                <div class="right-paras-container">
                  <div class="rp-content">
                    <h2 class="rp-title">
                      WELCOME TO SPICY A JOYOUS EATERY INSPIRED <br />
                      BY THE SPIRIT AND CULTURE OF INDIAN CUISINE.
                    </h2>
                    <hr />
                    <h4 class="rp-title-small">
                      MAKING DELICIOUS INDIAN FOOD SINCE 1990
                    </h4>
                    <p class="rp-paragraph">
                      Beginning as a modest café in 1990, Spicy has grown into
                      one of the most-admired fine dine restaurant chains in the
                      country today – a testament to our committed pursuit of
                      culinary and service excellence. A permanent fixture on
                      Indian cultural scene, people consider a trip to the
                      country incomplete without a visit to this iconic place
                      that serves the best indian food. Our award-winning
                      cuisine is loved for its purity and taste, true in every
                      mouthful to its royal origins. Over the last four years,
                      Spicy won the hearts of guests in Toronto, New York, New
                      Delhi, Miami and Seoul by opening several successful
                      Outlets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="third-hero">
            <div class="mini-reservation-background-container">
              <div class="mini-reservation-background-image">
                <div class="mini-reservation-container">
                  <div class="mini-reservation-content">
                    <h1 class="large">make a reservation</h1>
                    <p class="tagLine">
                      Opens 8:00 AM - 10:00 PM, every day of the week
                    </p>
                    <a href="#reservation" class="but-small">
                      Book a table
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="menu" class="fourth-hero">
            <div class="menu-container">
              <div class="menu-heading-container">
                <h1 class="resto-heading">Spicy's Menu</h1>
                <p class="resto-subheading">Variety Of Delicious Plate</p>
              </div>
              <div class="menu-content-container">
                <div class="Breakfast-container">
                  <h2 class="mh">Breakfast</h2>
                  <div class="common-content">
                    <div class="menu-item">
                      <h2 class="mih">Spinach Omelette</h2>
                      <p class="mip">
                        Select Any Four of the Following Toppings:
                        <br />
                        Bacon, Ham, Sausage, Cheddar.
                      </p>
                      <span class="price">$14</span>
                      <hr />
                    </div>
                    <div class="menu-item">
                      <h2 class="mih">Dosa</h2>
                      <p class="mip">
                        A dosa is a thin pancake or crepe, originating from{" "}
                        <br />
                        South India, made from a fermented batter predominantly
                        <br />
                        consisting of lentils and rice.
                      </p>
                      <span class="price">$14</span>
                      <hr />
                    </div>
                    <div class="menu-item">
                      <h2 class="mih">Idly</h2>
                      <p class="mip">
                        Idly are a type of savoury rice cake, The cakes are made
                        <br />
                        by steaming a batter consisting of fermented <br />
                        black lentils and rice. and dipped with <br />
                        coconut chutneys and lentil soups.
                      </p>
                      <span class="price">$14</span>
                    </div>
                  </div>
                </div>
                <div class="lunch-container">
                  <h2 class="mh">Lunch</h2>
                  <div class="common-content">
                    <div class="menu-item">
                      <h2 class="mih">Biryani</h2>
                      <p class="mip">
                        Biryani is a mixed rice dish.Served with
                        <br />
                        complimentary kebab platter, Immaculately <br />
                        spiced succulent mutton is layered with <br />
                        basmati & slow-cooked on a charcoal fire.
                      </p>
                      <span class="price">$14</span>
                      <hr />
                    </div>
                    <div class="menu-item">
                      <h2 class="mih">Falafel Platter</h2>
                      <p class="mip">
                        12 Pcs, Savour the great taste with <br />
                        shallow fried chickpea nuggets with <br />a blend of
                        aromatic spices.
                      </p>
                      <span class="price">$14</span>
                      <hr />
                    </div>
                    <div class="menu-item">
                      <h2 class="mih">chicken Kofta Platter</h2>
                      <p class="mip">
                        9 Pcs, Minced chicken kebabs cooked into <br />
                        soft delicious meatballs served with Minty dip.
                      </p>
                      <span class="price">$14</span>
                    </div>
                  </div>
                </div>
                <div class="dessert-container">
                  <h2 class="mh">Dessert</h2>
                  <div class="common-content">
                    <div class="menu-item">
                      <h2 class="mih">DOUBLE KA MEETHA</h2>
                      <p class="mip">
                        its a bread pudding Indian sweet of fried bread slices
                        <br />
                        soaked in hot milk with spices, including saffron and
                        <br />
                        cardamom.
                      </p>
                      <span class="price">$14</span>
                      <hr />
                    </div>
                    <div class="menu-item">
                      <h2 class="mih">Kheer</h2>
                      <p class="mip">
                        type of pudding from the Indian subcontinent, <br />
                        made by boiling milk, sugar, and rice,.
                      </p>
                      <span class="price">$14</span>
                      <hr />
                    </div>
                    <div class="menu-item">
                      <h2 class="mih">Gulab jamun</h2>
                      <p class="mip">
                        It is made mainly from milk solids, such as khoya,{" "}
                        <br />
                        which is milk reduced to the consistency of a soft
                        dough.
                        <br />
                        It is often garnished with dried nuts such as almonds
                        <br />
                        and cashews to enhance flavour.
                      </p>
                      <span class="price">$14</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="third-hero">
            <div class="mini-reservation-background-container">
              <div class="review-background-image">
                <div class="mini-reservation-container">
                  <div class="mini-reservation-content">
                    <h1 class="large">Reviews</h1>
                    <Carousel autoplay>
                      <div>
                        <h3 style={contentStyle}>
                          <p class="tagLine">CHICAGO MAGAZINE</p>
                          <p class="tagLine2">
                            Huge portions, great food, fast service.
                            <br />
                            This location obviously is always packed due to
                            being in Times Sq.
                            <br />
                            <Rate allowHalf disabled defaultValue={5} />
                          </p>
                        </h3>
                      </div>
                      <div>
                        <h3 style={contentStyle}>
                          <p class="tagLine">NewYork Times</p>
                          <p class="tagLine2">
                            No other restaurant in the city
                            <br />
                            makes the simple cooking of fish seem so ripe with
                            opportunities for excitement.
                            <br />
                            <Rate allowHalf disabled defaultValue={3.8} />
                          </p>
                        </h3>
                      </div>
                      <div>
                        <h3 style={contentStyle}>
                          <p class="tagLine">Gastronomica</p>
                          <p class="tagLine2">
                            Rich flavour, great taste, authentic indian dining.
                            <br />
                            <br />
                            <Rate allowHalf disabled defaultValue={4.8} />
                          </p>
                        </h3>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="reservation" class="sixth-hero">
            <div class="reservation-container">
              <div class="reservation-heading-container">
                <h1 class="resto-heading">Reservation</h1>
                <p class="resto-subheading">Book A Table</p>
                <p class="res-subheading">
                  Please choose your reservation date with specific time and
                  number
                  <br />
                  of people to book a table
                </p>
              </div>
              <div class="reservation-form-container">
                <div class="form-content">
                  <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="First Name:"
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Last Name:"
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Phone Number:"
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Email:"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 9,
                      }}
                    >
                      <Button
                        onClick={onFinish}
                        type="primary"
                        htmlType="submit"
                      >
                        Reserve Table
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </section>
          <section id="gallery" class="seventh-hero">
            <div class="gallery-container">
              <div class="gc-row-1">
                <div class="gc-image-container-1">
                  <div class="gc-image-background-1"></div>
                </div>
                <div class="gc-image-container-2">
                  <div class="gc-image-background-2"></div>
                </div>
                <div class="gc-image-container-3">
                  <div class="gc-image-background-3"></div>
                </div>
                <div class="gc-image-container-4">
                  <div class="gc-image-background-4"></div>
                </div>
              </div>
              <div class="gc-row-2">
                <div class="gc-image-container-5">
                  <div class="gc-image-background-5"></div>
                </div>
                <div class="gc-image-container-6">
                  <div class="gc-image-background-6"></div>
                </div>
                <div class="gc-image-container-7">
                  <div class="gc-image-background-7"></div>
                </div>
                <div class="gc-image-container-8">
                  <div class="gc-image-background-8"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="contact" class="contact">
          <div class="contact-container">
            <div class="left-image-container">
              <div class="left-image-background"></div>
            </div>
            <div class="right-text-container">
              <div class="social-container">
                <a href="https://www.facebook.com">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.messenger.com/">
                  <i class="fab fa-facebook-messenger"></i>
                </a>
                <a href="https://www.twitter.com">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <p class="timing">Opens Daily 8:00 AM - 10:00 PM</p>

              <p class="note">
                Dear guests, you are welcomed to dine with us at Spicy
                <br />
                restaurant. Have a pleasant dining experience.
              </p>
              <p class="address">
                3806 vineyard Rd <br />
                Miami, FL 454309 USA <br />
                <br />
                Phone: (123) 456-7890 <br />
                Fax: (123) 456-7890 <br />
                <a href="mailto:yourfirstname@yourlastname.com">
                  Email : customers@spicy.net
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
