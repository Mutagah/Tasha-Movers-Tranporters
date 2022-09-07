import React from "react";
import myImage from "../Images/photo-1591768793355-74d04bb6608f.jpeg"
import Carousel from "react-bootstrap/Carousel"
function Home(){
    return (
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-inline w-100"
                 src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80/800x400?text=First slide&bg=373940"
                  alt="Truck Image"
                />
                <Carousel.Caption>
                  <h1>We are reliable</h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src="https://images.unsplash.com/photo-1624339024061-b435d9261c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80/800x400?text=Second slide&bg=282c34"
                  alt="Pick-up image"
                />
                <Carousel.Caption>
                  <h1>We are transparent</h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1591706515036-cb0f48dc5e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80/800x400?text=Third slide&bg=20232a"
                  alt="Van image"
                />
                <Carousel.Caption>
                  <h1>We are accountable</h1>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
        }
export default Home;