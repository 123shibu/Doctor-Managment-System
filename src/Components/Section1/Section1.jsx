import React, { Suspense, useState } from "react";
import Bennar from "../../assets/banner-img-1.png";
import { useLocation } from "react-router";
import SectionCard from "../SectionCard/SectionCard";

const Section1 = ({ dataLoad }) => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [viewAll, setViewAll] = useState(false);
  const [doctors, setDoctors] = useState(dataLoad);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchDoctors = dataLoad.filter((doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase())
    );
    setDoctors(searchDoctors);
    setViewAll(false);
    setSearch(""); 
  };

  const toggleViewAll = () => {
    setViewAll(!viewAll);
    if (!viewAll) {
      setDoctors(dataLoad);
    } else {
      setDoctors(dataLoad.slice(0, 6));
    }
  };

  if (location.pathname !== "/") {
    return null;
  }

  const displayData = viewAll ? doctors : doctors.slice(0, 6);

  return (
    <div>
      <div className="overflow-hidden border-3 p-4 rounded-2xl border-white">
        <section>
          <h1 className="font-semibold text-center p-4 text-[2rem]">
            Dependable Care, Backed by Trusted <br /> Professionals.
          </h1>
          <div className="space-y-3">
            <p className="text-center text-[10px]">
              Our platform connects you with verified, experienced doctors across
              various specialties — all at your convenience. Whether it's <br /> a
              routine checkup or urgent consultation, book appointments in minutes
              and receive quality care you can trust.
            </p>

            <form onSubmit={handleSearch} className="flex justify-center gap-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search any doctors..."
                className="input input-bordered"
              />
              <button type="submit" className="btn btn-primary">
                Search Now
              </button>
            </form>

            <div className="flex gap-4 justify-center">
              <img
                className="h-auto md:w-[420px] sm:w-[260px]"
                src={Bennar}
                alt="Medical banner"
              />
              <img
                className="h-auto md:w-[420px] sm:w-[260px]"
                src={Bennar}
                alt="Medical banner"
              />
            </div>
          </div>
        </section>
      </div>

      <div>
        <div className="grid lg:grid-cols-3 max-w-5xl mx-auto sm:grid-cols-2 my-5 gap-4">
          {displayData.map((singleData) => (
            <Suspense key={singleData.id} fallback={<h1>Loading.....</h1>}>
              <SectionCard singleData={singleData} />
            </Suspense>
          ))}
        </div>

        <div className="max-w-5xl">
          <button
            onClick={toggleViewAll}
            className="w-[160px] text-[blue] block mx-auto hover:text-white hover:bg-blue-500 rounded-full p-2 border-1 border-blue-500 cursor-pointer bg-blue-100"
          >
            {viewAll ? "Show Less" : "View All Doctors"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
