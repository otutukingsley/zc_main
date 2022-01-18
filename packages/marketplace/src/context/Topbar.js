import { createContext, useState, useRef } from 'react'

export const TopbarContext = createContext(null)
export const TopbarProvider = ({ children }) => {
  const modalRef = useRef()

  // setting up my states for the profile topbar modal
<<<<<<<< HEAD:control/src/context/Topbar.js
  const [active, setActive] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showStatus, setShowStatus] = useState(false)
  const [showMembersModal, setShowMembersModal] = useState(false)
  const [chosenEmoji, setChosenEmoji] = useState({ emoji: '4️⃣' })
========
  const [active, setActive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState({ emoji: "4️⃣" });
>>>>>>>> 8d5b4a8ada20e6c31e29d8beca79334d0c343f78:packages/marketplace/src/context/Topbar.js

  // The function that opens the topbar profile modal
  const openModal = () => {
    setShowModal(!showModal)
  }

  // The function that closes the topbar profile modal
  const closeModal = e => {
    if (modalRef.current === e.target) {
<<<<<<<< HEAD:control/src/context/Topbar.js
      setShowModal(false)
========
      setShowModal(false);
>>>>>>>> 8d5b4a8ada20e6c31e29d8beca79334d0c343f78:packages/marketplace/src/context/Topbar.js
    }
  }

  // The function that opens the topbar profile status modal
  const openStatus = () => {
    setShowStatus(!showStatus)
  }

  // The function that closes the topbar profile status modal
  const closeStatus = e => {
    if (modalRef.current === e.target) {
      setShowStatus(false)
    }
  }

  // The function for the emoji onclick events
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
  }

  // The function that opens the member list modal
  const openMembersModal = () => {
    setShowMembersModal(true)
  }

  // The function that closes the member list modal
  const closeMembersModal = () => {
    setShowMembersModal(false)
  }

  // The function that opens the member list modal
  const openMembersModal = () => {
    setShowMembersModal(true);
  };

  // The function that closes the member list modal
  const closeMembersModal = () => {
    setShowMembersModal(false);
  };

  // Passes all functions and states to the state object
  const state = {
    openModal,
    closeModal,
    openStatus,
    closeStatus,
    openMembersModal,
    closeMembersModal,
    modalRef,
    presence: [active, setActive],
    show: [showModal, setShowModal],
    status: [showStatus, setShowStatus],
    emoji: [chosenEmoji, setChosenEmoji],
    modal: [showMembersModal, setShowMembersModal],
    onEmojiClick
  }

  return (
    <TopbarContext.Provider value={state}>{children}</TopbarContext.Provider>
  )
}
