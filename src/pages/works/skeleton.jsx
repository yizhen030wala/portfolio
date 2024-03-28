// import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './skeleton.scss'


const SkeletonItem = () => {

  return (
    <section style={{marginTop: '25vh', margin: '10%' }}>
      <h2 className="section-title" >
        <Skeleton duration={1} height={50}  width={200}/>
      </h2>
      <h2 className="section-title">
        <Skeleton duration={1} height={300}  />
      </h2>
      {/* <ul className="list">
        {Array(17)
          .fill()
          .map((item, index) => (
            <li className="card" key={index}>
              <Skeleton height={180} />
            </li>
          ))}
      </ul> */}
    </section>
  );
};

const SkeletonCard = () => {
  return (
    <>
      <SkeletonItem />
      <SkeletonItem />
    </>
  );
};

export default SkeletonCard;
