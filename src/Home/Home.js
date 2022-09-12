import React from "react";
import "./Home.css"
function Home(){
    return (
      <div>
      <div class="container HomeClass">
      <div className="mt-2 ImageClass">
      <img className="Image" src="https://img.freepik.com/premium-vector/moving-home-office-relocation-new-location-movers-carry-boxes-concept-transportation-delivery-goods-vector_174639-30363.jpg?w=1800"/>
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