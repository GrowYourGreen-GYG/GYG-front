import { Plant } from "@/types/Plant";
import Image from "next/image";

const MainPlant = () => {
  const plantInfo: Plant = {
    level: 3,
    plantName: "새싹이",
    point: 100,
  };

  return (
    <div className="mx-auto flex justify-around items-center w-1/2">
      <div className="flex flex-col">
        <Image
          src={`/imges/plant/plant_level${plantInfo.level}.png`}
          width={300}
          height={350}
          alt={"plant_img"}
        />
      </div>
      <div className="flex flex-col h-4/5 justify-around">
        <h2 className="text-3xl text-main-green font-extrabold">
          🌿 잘 자라고 있어요
        </h2>
        <div>
          <span className="text-xl font-bold text-main-green">성장치</span>
          <span>====</span>
          <span className="text-l">
            {((plantInfo.point / 300) * 100).toFixed(2)}%
          </span>
        </div>
        <div>
          <button className="bg-main-beige mx-2">💦물주기</button>
          <button className="bg-main-beige mx-2">📸사진 저장</button>
        </div>
      </div>
    </div>
  );
};

export default MainPlant;
