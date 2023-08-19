/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Card from "../components/Card";
import ListWrapper from "../components/ListWrapper";

import { useLocation } from "react-router-dom";
import APIfetch from "../services/APIfetch";

import CardSkeleton from "./CardSkeleton";

export default function CardList({ type }) {
  const [resultList, setList] = useState([]);
  const [listVariant, setListVariant] = useState("popular");
  const [headerTitle, setHeaderTitle] = useState("Popular");

  let url = useLocation();
  url = url.pathname.slice(1);
  let urlOption = "";

  if (url === "movies") {
    urlOption = "movie";
  }
  if (url === "tvshows") {
    urlOption = "tv";
  }

  useEffect(() => {
    setTimeout(() => {
      APIfetch.getAll(
        `https://api.themoviedb.org/3/${urlOption}/${listVariant}`
      ).then((elems) => {
        setList(elems);
      });
    }, Math.random() * 1800);
  }, [listVariant, urlOption]);
  return (
    <div className="flex flex-col h-fit w-full px-52 pb-3 pt-8">
      <h1 className="headings-h1 text-gray-50">
        {" "}
        {headerTitle} {type}
      </h1>
      <p className="body-small py-4">
        {" "}
        A list of the current popular, top rated and upcoming movies for you,
        the user
        <br />
        feel free to click on any of the movies to get it´s details
        <br />
        Have fun!
      </p>
      <ListWrapper
        setListVariant={setListVariant}
        setHeaderTitle={setHeaderTitle}
        setList={setList}
      />

      <div className="flex flex-row  gap-3 flex-wrap justify-evenly py-4">
        {resultList.length > 0 ? (
          resultList.map((element, index) => {
            return <Card key={index} element={element} />;
          })
        ) : (
          <CardSkeleton />
        )}
      </div>
    </div>
  );
}
