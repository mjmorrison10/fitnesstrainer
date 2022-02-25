import { Modal } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import reactDom from "react-dom";
import Button from "./Button";
import OpenClose from "./OpenClose";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// Modal.setAppElement("#root");

function Header() {
  const [menu, setMenu] = useState(true);
  const [isActive, setActive] = useState(false);

  const [ok, setOk] = useState(false);
  //   let subtitle;
  //   const [modalIsOpen, setIsOpen] = React.useState(false);

  // Antd Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleModal() {
    !ok ? setOk(false) : setOk(true);
    menu ? setMenu(false) : setMenu(true);
    !isModalVisible ? setIsModalVisible(true) : setIsModalVisible(false);
    console.log("menu ->", menu, "isModalVisible =>", isModalVisible);
    // console.log("before", modalIsOpen);
    // !modalIsOpen ? setIsOpen(true) : setIsOpen(false);
    // console.log("after", modalIsOpen);
  }

  //   function openModal() {
  //     setIsOpen(true);
  //   }
  //   function afterOpenModal() {
  // references are now sync'd and can be accessed.
  // subtitle.style.color = "#f00";
  //   }
  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  //   function handleMenu() {
  //     console.log("test");
  //     isActive ? setActive(false) : setActive(true);
  //   }

  return (
    <header className="container mx-auto">
      <nav className="flex justify-between">
        <div className="flex items-end">
          <div className="h-16 w-16">
            <img
              className="h-full w-full object-cover"
              src="/images/logo.png"
              alt="logo"
            />
          </div>
          <div className="ml-1">
            <div className="text-md">Daniel Elfo</div>
            <div className="text-xs">Personal Trainer</div>
          </div>
        </div>

        {/* <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onCancel={() => setOk(false)}
          footer={null}

          //   isOpen={modalIsOpen}
          //   onAfterOpen={afterOpenModal}
          //   onRequestClose={closeModal}
          //   style={customStyles}
          //   contentLabel="Example Modal"
        > */}

        <Modal
          visible={isModalVisible}
          onOk={handleModal}
        >
            <div>Test content</div>
            <div>Test content</div>
            <div>Test content</div>
            <div>Test content</div>
          {/* <Button title="My Story" />
          <Button title="Prices" />
          <Button title="On-Demand" />
          <Button title="Live Classes" />
          <Button title="Testimonials" />
          <Button title="Contact" /> */}
        </Modal>

        <div className="md:flex hidden justify-center">
          <Button title="My Story" />
          <Button title="Prices" />
          <Button title="On-Demand" />
          <Button title="Live Classes" />
          <Button title="Testimonials" />
          <Button title="Contact" />
        </div>
        <div onClick={handleModal}>
          <OpenClose />
        </div>
      </nav>
    </header>
  );
}

export default Header;
