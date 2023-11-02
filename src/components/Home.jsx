import React, { useState } from "react";
import home from "../pics/home.png";
import laptop from "../pics/laptop.png";
import people from "../pics/people.png";
import send from "../pics/send.png";
import shopping from "../pics/shopping.png";
import setting from "../pics/settings.png";
import user from "../pics/user.png";
import edit from "../pics/edit.png";
import trash from "../pics/trash.png";
import Navbar from "./Navbar";
import Modal from "./Modal";
import Templates from "./Templates";

const defaultModalState = {
  templateName: "",
  title: "",
  landingPageUrl: "",
  message: "",
  bannerImage: "",
  notificationIcon: "",
  buttonTitle1:"",
  buttonLink1:"",
  buttonTitle2:"",
  buttonLink2:"",
  source:"",
  medium:"",
  campaign:"",
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([
    {
      templateName: "1",
      title: "sample1",
      landingPageUrl: "",
      message: "hehehehee",
      bannerImage: "",
      action: "asdasd",
      notificationIcon: "",
    },
    {
      templateName: "2",
      title: "sample2",
      landingPageUrl: "",
      message: "hehehesadasdhee",
      bannerImage: "",
      action: "asdasd",
      notificationIcon: "",
    },
  ]);

  const [modalState, setModalState] = useState(defaultModalState);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onRowClick = (tableRow) => {
    openModal();
    setModalState(tableRow);
  };

  const onCreateModal = () => {
    openModal();
    setModalState(defaultModalState);
  };
  const updateTableData = () => {
    setTableData((prev) => {
      return [...prev, modalState];
    });
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        {/* aside  */}
        <div className="aside">
          <div className="up">
            <img src={home} alt="yiou" className="aside-icon" />
            <img src={send} alt="" className="aside-icon" />
            <img src={people} alt="cacc" className="aside-icon" />
            <img src={laptop} alt="" className="aside-icon" />
            <img src={shopping} alt="" className="aside-icon" />
            <img src={setting} alt="" className="aside-icon" />
          </div>
          <div className="down">
            <img src={user} alt="" className="aside-icon" />
          </div>
        </div>

        <div className="content">
          <div className="template">
            <h1>Templates</h1>

            <div className="template-icons">
              <img src={edit}  width="300px"   alt="yiou" className="aside-icon" />
              <img src={trash} alt="yiou" className="aside-icon" />

              <div>
                <button className="create-button" onClick={onCreateModal}>
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="table">
          <Templates tableData={tableData} onRowClick={onRowClick} />
          </div>


          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            updateTableData={updateTableData}
            modalState={modalState}
            setModalState={setModalState}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
