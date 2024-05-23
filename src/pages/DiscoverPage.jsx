import React, { useEffect, useState } from "react";
import TitleTwoColors from "../components/typography/TitleTwoColors";
import { getCategories, getToken } from "../services/spotify";
import CategoryBox from "../components/boxes/CategoryBox";
import GoBackButton from "../components/buttons/GoBackButton";
import { useNavigate } from "react-router-dom";

export default function DiscoverPage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getToken().then((access_token) => {
      getCategories(access_token).then((cats) => {
        setCategories(cats);
      });
    });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="px-20">
      <div className="flex justify-end w-full">
        <GoBackButton onClick={goBack} />
      </div>
      {/* categories */}
      <div className="my-14">
        <TitleTwoColors text={"All "} colorText={"Categories"} />

        <div className="mt-6 grid grid-cols-6 gap-x-10 items-center">
          {categories.map((item) => {
            return (
              <div className="my-5">
                <CategoryBox data={item} key={item.id} dataType={"Category"} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
