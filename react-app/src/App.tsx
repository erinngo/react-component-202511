import "./App.css";
import Swiper_01 from "./components/Swiper_01";
import OrderZipcodeModal from "./components/OrderZipcodeModal";
import { CustomInput } from "./components/CustomInput";
import { useState } from "react";

function App() {
  const [isSamsungChecked, setIsSamsungChecked] = useState(false);
  const handleCheckSamsung = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isSamsungChecked = e.target.checked;
    setIsSamsungChecked(isSamsungChecked);
  };
  return (
    <>
      <Swiper_01 />
      <OrderZipcodeModal />

      <CustomInput
        type="checkbox"
        id="samsungBonus"
        checked={isSamsungChecked}
        onChange={handleCheckSamsung}
      >
        삼성카드 보너스포인트 사용
      </CustomInput>
    </>
  );
}

export default App;
