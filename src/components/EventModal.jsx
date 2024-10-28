import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './EventModal.css';

const EventModal = ({ isOpen, onRequestClose, event }) => (
  <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose} 
    ariaHideApp={false} 
    className="modal"
    overlayClassName="overlay"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-content"
    >
      <button onClick={onRequestClose} className="close-btn">Close</button>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <div className="image-container">
        <img src={event.image} alt={event.name} />
      </div>
    </motion.div>
  </Modal>
);

export default EventModal;
