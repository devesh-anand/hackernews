import { React, useContext } from "react";
import Modal from "react-modal";
import firebaseInit from "./../firebase/firestore";
import { toast } from "react-toastify";
import bookmarksUpdated from "./bookmarksUpdated";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  },
};

Modal.setAppElement("#root");

const DeleteModal = ({ modalIsOpen, setModal, uid, id }) => {
  const { bookmarksUpdatedOrNot, setBookmarksUpdated } =
    useContext(bookmarksUpdated);

  const notify = (message, type) => {
    if (type) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const db = firebaseInit.firestore();
  function closeModal() {
    db.collection("bookmarks")
      .where("uid", "==", uid)
      .where("storyId", "==", id)
      .get()
      .then((snapshot) => {
        snapshot.forEach((snap) => {
          snap.ref.delete();
        });
        setBookmarksUpdated(!bookmarksUpdatedOrNot);
        notify("successfully deleted!", false);
      })
      .catch((e) => {
        console.log(e);
      });

    setModal(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5>Are you sure you want to delete the bookmarked story?</h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "16px 0 0 0",
          }}
        >
          <button onClick={closeModal}>Yes</button>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            No
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
