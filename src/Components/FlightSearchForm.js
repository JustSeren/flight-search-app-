import React, { useState } from "react";
import "./FligthSearch.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FlightResultForm from "./FlightResultForm";
import FlightLoading from './FlightLoading';
const FlightSearchForm = () => {
  const [activeTab, setActiveTab] = useState("return");
  const [detortTime, setDeportTime] = useState(new Date());
  const [arrivalTime, setArrivalTime] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    // Yükleniyor durumunu başlat
    setLoading(true);

    // Uçuş araması veya API isteği yapılabilir
    // Örnek: Axios veya fetch kullanarak API isteği yapılabilir

    // Örnek: API isteği tamamlandığında yükleniyor durumunu kapat ve sonuçları göster
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 saniyelik bir bekleme süresi (örnek amaçlı)

    // API sonuçlarını alma ve sonuçları uygun bir şekilde saklama işlemi burada yapılmalıdır.
  };
  return (
    <div>
      <div className="container">
        <div className="card-component">
          <div className="change-btns">
            <button
              className={`btn-oneway ${activeTab === "oneway" ? "active" : ""}`}
              onClick={() => setActiveTab("oneway")}
            >
              One way
            </button>
            <button
              className={`btn-return ${activeTab === "return" ? "active" : ""}`}
              onClick={() => setActiveTab("return")}
            >
              Return
            </button>
          </div>
          <div className="content">
            <input className="from" id="from" type="text" placeholder="From" />
            <input className="to" id="to" type="text" placeholder="To" />
            <DatePicker
              className="deport-time"
              selected={detortTime}
              onChange={(date) => setDeportTime(date)}
            />
            <DatePicker
              className="arrival-time"
              selected={arrivalTime}
              onChange={(date) => setArrivalTime(date)}
              disabled={activeTab === "oneway"}
            />
           <button className="btn-search" type="button" onClick={handleSearch}>
              Search Flight
            </button>
          </div>
        </div>
        <div className="containerResult">
          {loading ? <FlightLoading /> : <FlightResultForm />}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
