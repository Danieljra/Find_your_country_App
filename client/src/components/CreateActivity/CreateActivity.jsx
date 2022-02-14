import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postNewActivity, getallActivities } from "../../actions";
import Styles from "./CreateActivity.module.css";

const CreateActivity = () => {
  const allcountries = useSelector((state) => state.allcountries);
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState({});
  const [newActivity, setNewActivity] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: ["Verano", "Otoño", "Invierno", "Primavera"],
    countryId: [],
  });

  const validateDuration = (value) => {
    let ExpRegLetrasEspacio = "^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
    let errors = {};

    if (value.name.match(ExpRegLetrasEspacio) == null) {
      errors.name = "Name of the activity cannot contain numbers or symbols!";
    }
    return errors;
  };

  useEffect(() => {
    dispatch(getallActivities());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setNewActivity({
      ...newActivity,
      [e.target.name]: e.target.value,
    });
    setErrorMessage(
      validateDuration({
        ...newActivity,
        [e.target.name]: e.target.value,
      })
    );
    console.log(newActivity);
  };

  const handleSelectChange = (e) => {
    setNewActivity({
      ...newActivity,
      countryId: [...newActivity.countryId, e.target.value],
    });
  };

  const handleformSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewActivity(newActivity));
    alert("A new activity has been created!");
    setNewActivity({
      name: "",
      dificulty: "",
      duration: "",
      season: ["Verano", "Otoño", "Invierno", "Primavera"],
      countryId: [],
    });
  };

  const deleteCountry = (name) => {
    setNewActivity({
      ...newActivity,
      countryId: newActivity.countryId.filter((c) => c !== name),
    });
  };

  return (
    <div className={Styles.container}>
      <h1>Create new turist activity</h1>
      <div className={Styles.container1}>
        <div>
          <Link to="/home">
            <button className={Styles.button}>
              <span class={Styles.shadow}></span>
              <span class={Styles.edge}></span>
              <span class={`${Styles.front} ${Styles.text}`}>Back to home</span>
            </button>
          </Link>
        </div>
        <div>
          <button
            onClick={(e) => handleformSubmit(e)}
            className={Styles.button2}
            type="submit"
            value="Submit"
            disabled={
              // el boton queda deshabilitado si alhuno de los inputs no estan llenos.
              !newActivity.name ||
              !newActivity.duration ||
              !newActivity.dificulty ||
              !newActivity.season ||
              !newActivity.countryId
            }
          >
            <span class={Styles.shadow2}></span>
            <span class={Styles.edge2}></span>
            <span class={`${Styles.front2} ${Styles.text2}`}>Create</span>
          </button>
        </div>
      </div>
      <form
        className={Styles.formContainer}
        onSubmit={(e) => handleformSubmit(e)}
      >
        <div className={Styles.inputName}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={newActivity.name}
            placeholder="Ej: Sky"
            onChange={(e) => handleInputChange(e)}
          />
          {errorMessage && <p>{errorMessage.name}</p>}
        </div>

        <div className={Styles.inputDificulty}>
          <label>Dificulty: </label>
          <select name="dificulty" onChange={(e) => handleInputChange(e)}>
            <option selected="true" disabled="disabled">
              Select Dificulty
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div className={Styles.inputDuration}>
          <label>Duration in minutes: </label>
          <input
            value={newActivity.duration}
            min="15"
            max="120"
            type="number"
            name="duration"
            placeholder="Ej: 35min"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className={Styles.inputSeason}>
          <label>Season: </label>
          <select name="season" onChange={(e) => handleInputChange(e)}>
            <option selected="true" disabled="disabled">
              Select Season
            </option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Primavera">Primavera</option>
            <option value="Invierno">Invierno</option>
          </select>
        </div>

        <div className={Styles.inputCountry}>
          <label>Country: </label>
          <select name="countryId" onChange={(e) => handleSelectChange(e)}>
            <option selected="true" disabled="disabled">
              Choose the country
            </option>
            {allcountries ? (
              allcountries.map((c, i) => (
                <option value={c.id} key={i}>
                  {c.name}
                </option>
              ))
            ) : (
              <option>No hay paises precargados todavia!</option>
            )}
          </select>
        </div>
      </form>

      <div>
        {newActivity &&
          newActivity.countryId.map((name, i) => (
            <div className={Styles.deleteCountries} key={i}>
              <h5>{name}</h5>
              <button onClick={() => deleteCountry(name)}>X</button>
            </div>
          ))}
      </div>
    </div>
  );
};
export default CreateActivity;
