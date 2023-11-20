import React, { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'
import {
  TriangleDownIcon,
  AddIcon,
  DeleteIcon,
  EditIcon,
  CloseIcon
} from '@chakra-ui/icons'
import Modal from '../Modal/Modal'
import AddMovieForm from './AddMovieForm'
import DeleteMovieForm from './DeleteMovieForm'
import EditMovieForm from './EditMovieForm'

const MenuNav = ({ handleLogOut }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const openModal = (option) => {
    setShowModal(true)
    setSelectedOption(option)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedOption(null)
  }

  const renderModalContent = () => {
    switch (selectedOption) {
      case 'Add Movie':
        return <AddMovieForm onClose={closeModal} />
      case 'Delete Movie':
        return <DeleteMovieForm onClose={closeModal} />
      case 'Edit Movie':
        return <EditMovieForm onClose={closeModal} />
      default:
        return null
    }
  }

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<TriangleDownIcon />}
          variant='ghost'
          color='white'
          isRound
          _hover={{
            bgColor: 'transparent'
          }}
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} onClick={() => openModal('Add Movie')}>
            Add Movie
          </MenuItem>
          <MenuItem
            icon={<DeleteIcon />}
            onClick={() => openModal('Delete Movie')}
          >
            Delete Movie
          </MenuItem>
          <MenuItem icon={<EditIcon />} onClick={() => openModal('Edit Movie')}>
            Edit Movie...
          </MenuItem>
          <MenuItem icon={<CloseIcon />} onClick={handleLogOut}>
            Log out
          </MenuItem>
        </MenuList>
      </Menu>

      {showModal && (
        <Modal
          title={selectedOption}
          content={renderModalContent()}
          onClose={closeModal}
        />
      )}
    </>
  )
}

export default MenuNav
