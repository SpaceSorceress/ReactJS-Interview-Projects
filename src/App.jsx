import Accordion from "./components/Accordion";
import GithubSearchUser from "./components/GithubUserSearch";
import ImageSlider from "./components/ImageSlider";
import LightDarkMode from "./components/LightDarkMode";
import LoadMoreProducts from "./components/LoadMoreProducts";
import ModalPopupContainer from "./components/ModalPopup";
import QRCodeGenerator from "./components/QRCodeGenerator";
import RandomColorGenerator from "./components/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator";
import StarRating from "./components/StarRating";
import TreeViewMenu from "./components/TreeViewComponent";

export default function App() {
  return (
    <>
      <div className="App">
        {/*Accordion Component*/}
        <Accordion />

        {/*Random Color Component*/}
        <RandomColorGenerator />

        {/* Star Rating Component*/}
        <StarRating numberOfStars={10} />

        {/* Image Slider Component*/}
        <ImageSlider page={1} limit={10} />

        {/* Load more products component */}
        <LoadMoreProducts />

        {/* Tree view menu/menu UI component / recursive navigation menu  */}
        <TreeViewMenu />

        {/* QR Code Generator Component */}
        <QRCodeGenerator />

        {/* Light vs Dark Mode Component*/}
        <LightDarkMode />

        {/* Scroll Indicator Component */}
        <ScrollIndicator />

        {/* Modal Popup Component */}
        <ModalPopupContainer />

        {/* Github User Search Component */}
        <GithubSearchUser />
      </div>
    </>
  );
}
