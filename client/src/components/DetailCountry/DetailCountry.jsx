import React from "react";
import { getDetailCountry } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Styles from "./DetailCountry.module.css";
const DetailCountry = () => {
  const dispatch = useDispatch();
  const detailCountry = useSelector((state) => state.detailCountry);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailCountry(id));
  }, [dispatch, id]);

  return (
    <div className={Styles.containerDetail}>
      <div className={Styles.Header}>
        <Link to="/home">
          <button className={Styles.button}>
            <span class={Styles.shadow}></span>
            <span class={Styles.edge}></span>
            <span class={`${Styles.front} ${Styles.text}`}>Back to home</span>
          </button>
        </Link>
      </div>

      {Object.keys(detailCountry).length > 0 ? (
        <div className={Styles.containerCountry}>
          <div>
            <img
              className={Styles.flag}
              src={detailCountry.flagImage}
              alt="img not found"
            />
          </div>

          <div className={Styles.details}>
            <h3>{detailCountry.name}</h3>
            <p>Acronym: {detailCountry.id}</p>
            <p>Capital: {detailCountry.capital}</p>
            <p>Subregion: {detailCountry.subregion}</p>
            <p>Area: {detailCountry.area + " km2"}</p>
            <p>Population: {detailCountry.population + " people"}</p>
          </div>

          <div className={Styles.activities}>
            {detailCountry.activities.length > 0 ? (
              detailCountry.activities.map((act) => {
                return (
                  <div key={act.id}>
                    <h3>Associated tourist activity</h3>
                    <p>{act.name}</p>
                    <p>Dificulty: {act.dificulty}</p>
                    <p>Duration: {act.duration + "mins"} </p>
                    <p>Season: {act.season}</p>
                  </div>
                );
              })
            ) : (
              <h4>There is no activities yet</h4>
            )}
          </div>
        </div>
      ) : (
        <h3 className={Styles.cargando}>Cargando...</h3>
      )}
    </div>
  );
};

export default DetailCountry;
