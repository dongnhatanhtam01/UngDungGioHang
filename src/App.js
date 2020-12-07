import logo from './logo.svg';
import './App.css';
import BaiTapGioHang from './components/BaiTap/BaiTapGioHang';
import GioHangHome from './components/BaiTapGioHang/GioHangHome';
import CartExercise from './components/OnTapGioHang/CartExercise';

function App() {
  return (
    <div className="App">
      <CartExercise />
      {/* <BaiTapGioHang></BaiTapGioHang> */}
      {/* <GioHangHome></GioHangHome> */}
    </div>
  );
}

export default App;
