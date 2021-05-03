import React from "react";
import SmallCarousel from "../components/SmallCarousel/SmallCarousel";
import Layout from "../layouts/Layout";

const trips = [
  {
    name: "Big Trip",
    location: "Cancun",
    image:
      "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2498&q=80",
  },
  {
    name: "smaller trip",
    location: "Boston",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg",
  },
  {
    name: "smaller trip",
    location: "Boston",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg",
  },
  {
    name: "smaller trip",
    location: "Boston",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg",
  },
  {
    name: "smaller trip",
    location: "Boston",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg",
  },
];

const prevTrips = [
  {
    name: "Big Trip",
    location: "Cancun",
    image:
      "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2498&q=80",
  },
  {
    name: "smaller trip",
    location: "Boston",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg",
  },
  {
    name: "smaller trip",
    location: "Boston",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg",
  },
  {
    name: "smaller trip",
    location: "Boston",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg",
  },
  {
    name: "smaller trip",
    location: "Boston",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg",
  },
];

export default function UserTrips(props) {
  return (
    <Layout location="/mytrips">
      <h2>Active Trips</h2>
      <SmallCarousel data={trips} />
      <h2>Previous Trips</h2>
      <SmallCarousel data={prevTrips} />
    </Layout>
  );
}
