import { fetchUserPoints } from "@/entities/User/api/endpoints";
import { UserStore } from "@/entities/User/model/store";
import { useEffect } from "react";

export const Points = () => {
  const getPoints = UserStore((state) => state.getPoints);
  const points = UserStore((state) => state.points);

  useEffect(() => {
    fetchUserPoints();
  }, []);
  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <span className="text-lg mb-4">Очки</span>
      <div className={`text-2xl`}>
        <div
          className={`flex justify-center items-center inset-0 rounded-full outline-8 p-10 ${points > 100 ? "outline-accent" : points > 50 ? "outline-accent/50" : "outline-accent/20"}`}
        >
          <span className="text-3xl">{getPoints()}</span>
        </div>
      </div>
    </div>
  );
};
