import React from "react";
import "./Home.css"
import Carousel from "react-bootstrap/Carousel"
function Home(){
    return (<div>
           <div className="mt-3 container">
            <div className="row">
              <div className="col-md- col-lg-10 offset-md-2 offset-lg-1">
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
              </div>
            </div>
           </div>
            <div className="stylingpic">
           <div className="stylingpic container-fluid grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="row">
              <div className="col-sm">
                  <div className="card carding" style={{width: "18rem"}}>
                  <img src="https://image.shutterstock.com/image-photo/truck-goes-on-highway-evening-600w-1551201551.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h3 className="card-text">We are realiable</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm cardsZetu">
              <div className="card carding" style={{width: "18rem"}}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Ford_F-150_crew_cab_--_05-28-2011.jpg/1200px-Ford_F-150_crew_cab_--_05-28-2011.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h3 className="card-text">Guaranteed good services</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm cardsZetu">
              <div className="card carding" style={{width: "18rem"}}>
                  <img src="https://professionalpickup.com/wp-content/uploads/2022/03/Audi-Pickup-Truck-Concept-by-Kleber-Silva-2022-Professional-Pickup-01.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h3 className="card-text">We are affordable</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
              <div className="card carding" style={{width: "18rem"}}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRiZXdm3FPRZEdCd168bj8fu-dWd0fw03Sg&usqp=CAU" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h3 className="card-text">We are accountable</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
         </div>
          );
        }
export default Home;