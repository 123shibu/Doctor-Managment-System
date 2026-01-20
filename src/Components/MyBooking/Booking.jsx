import React, { useEffect, useState } from "react";
import { getStorage, removeItems } from "../../Utilities";
import { ToastContainer, toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  
} from "recharts";

const Booking = () => {
  const [display, setDisplay] = useState([]);
  // console.log (display)
  useEffect(() => {
    const saveData = getStorage();
    setDisplay(saveData);
  }, []);

  const handleDelet = (id) => {
    toast("Scheduled Cancel !");
    removeItems(id);
    setDisplay(getStorage());
  };

  const chartData = display.map((doctor) => ({
    name: doctor.name,
    fee: parseInt(doctor.fees.replace(/\D/g, "")) || 0,
  }));

  const colors = [
    "#FF6384", 
    "#36A2EB", 
    "#FFCE56", 
    "#4BC0C0", 
    "#9966FF", 
    "#FF9F40", 
    "#8AC24A", 
    "#FF6B6B", 
    "#47B8E0", 
    "#7C4DFF"  
  ];

  return (
    <div className="">
      <ToastContainer />

      {display.length > 0 && (
        <div className="my-6 p-4 bg-white rounded-[10px] shadow">
          <h2 className="text-xl font-bold mb-4">Doctors Fee Comparison</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 10,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"  />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="fee"
                  name="Appointment Fee"
                  animationDuration={2000}
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={colors[index % colors.length]} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {display.map((data, index) => (
        <div
          key={index}
          className="my-4 w-full bg-white rounded-[10px] p-4 space-y-3"
        >
          <h2 className="font-bold text-2xl">Doctor Name: {data.name}</h2>
          <div className="flex justify-between">
            <p>{data.education}</p>
            <h2 className="font-semibold">
              Appointment Fee:{" "}
              <span className="text-blue-500">{data.fees}</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => handleDelet(data.id)}
              className="w-[50%] p-1 rounded-full border-1 my-3 hover:bg-red-100 cursor-pointer text-red-500"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booking;