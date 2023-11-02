import React, { useState } from "react";
import CustomInput from "./common/FileInput/CustomInput";
import FileInput from "./common/FileInput";

function Modal({
  isOpen,
  closeModal,
  modalState,
  setModalState,
  updateTableData,
}) {
  if (!isOpen) return null;

  const bannerImageHnadle = (file) => {
    setBannerImage(file);
  };
  const notificationImageHnadle = (file) => {
    setNotificationIcon(file);
  };

  const handleOnChange = (inputName, inputValue) => {
    setModalState((prev) => {
      return {
        ...prev,
        [inputName]: inputValue,
      };
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "95%",
            textAlign: "end",
            backgroundColor: "white",
          }}>
          <button
            onClick={closeModal}
            style={{
              backgroundColor: "white",
              fontSize: "28px",
            }}>
            X
          </button>
        </div>
        <h2>Template</h2>
        <p>Template Name</p>

        <CustomInput
          value={modalState.templateName}
          onChange={(e) => {
            handleOnChange("templateName", e.target.value);
          }}
          placeholder={"Template Name"}
        />
        <p>Landing Page URL</p>
        <CustomInput
          value={modalState.landingPageUrl}
          onChange={(e) => {
            handleOnChange("landingPageUrl", e.target.value);
          }}
          placeholder={"Landing Page Url"}
        />
        <p>Title</p>

        <CustomInput
          value={modalState.title}
          onChange={(e) => {
            handleOnChange("title", e.target.value);
          }}
          placeholder={"Title"}
        />

        <p>Message</p>
        <CustomInput
          value={modalState.message}
          onChange={(e) => {
            handleOnChange("message", e.target.value);
          }}
          placeholder={"Message"}
          required={true}
        />
        <p>Banner Image "Optional"</p>
        <FileInput
          accept={"image/*"}
          id={"banner-image-input"}
          fileHandle={bannerImageHnadle}
          text={"Banner Image Upload"}
        />
        <p>Notification Icon</p>
        <FileInput
          accept={"image/*"}
          id={"banner-image-input"}
          fileHandle={notificationImageHnadle}
          text={"Notification icon"}
        />

        <p>Button 1</p>
        <hr className="line" />
        <div className="button-main">
          <div className="button1">
            <span>Title</span>
            <CustomInput
              value={modalState.buttonTitle1}
              placeholder={"Button text"}
              onChange={(e) => {
                handleOnChange("buttonTitle1", e.target.value);
              }}
              required={true}
              variant="small"
            />
          </div>
          <div className="button1">
            <span>Button Link</span>
            <CustomInput
              value={modalState.buttonLink1}
              onChange={(e) => {
                handleOnChange("buttonLink1", e.target.value);
              }}
              placeholder={"Button Link"}
              required={true}
              variant="small"
            />
          </div>
        </div>

        <p>Button 2</p>
        <hr className="line" />
        <div className="button-main">
          <div className="button1">
            <span>Title</span>
            <CustomInput
              value={modalState.buttonTitle2}
              placeholder={"Button text"}
              onChange={(e) => {
                handleOnChange("buttonTitle2", e.target.value);
              }}
              required={true}
              variant="small"
            />
          </div>
          <div className="button1">
            <span>Button Link</span>
            <CustomInput
              value={modalState.buttonLink2}
              onChange={(e) => {
                handleOnChange("buttonLink2", e.target.value);
              }}
              placeholder={"Button Link"}
              required={true}
              variant="small"
            />
          </div>
        </div>

        <p>UTM Parameters </p>
        <hr className="line" />
        <div className="button-main">
          <div className="button 1">
            <span>Source</span>
            <CustomInput
              value={modalState.source}
              placeholder={"Source"}
              onChange={(e) => {
                handleOnChange("source", e.target.value);
              }}
              required={true}
              variant="extra-small"
            />
          </div>
          <div className="button 1">
            <span>Medium</span>
            <CustomInput
              value={modalState.medium}
              onChange={(e) => {
                handleOnChange("medium", e.target.value);
              }}
              placeholder={"Notification"}
              required={true}
              variant="extra-small"
            />
          </div>
          <div className="button 1">
            <span>Campaign ID</span>
            <CustomInput
              value={modalState.campaign}
              onChange={(e) => {
                handleOnChange("campaign", e.target.value);
              }}
              placeholder={"110059"}
              required={true}
              variant="extra-small"
            />
          </div>
        </div>
      </div>
      <div className="modal-button-div">
        <hr />
        <button className="modal-button" onClick={closeModal}>
          Close
        </button>
        <button className="modal-button" onClick={updateTableData}>
          Create
        </button>
      </div>
    </div>
  );
}

export default Modal;
